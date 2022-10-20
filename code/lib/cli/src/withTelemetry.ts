import { option } from 'commander';
import prompts from 'prompts';
import {
  CLIOptions,
  LoadOptions,
  BuilderOptions,
  Options,
  StorybookConfig,
  CoreConfig,
  resolvePathInStorybookCache,
  loadAllPresets,
  cache,
} from '@storybook/core-common';
import { telemetry } from '@storybook/telemetry';
import type { EventType } from '@storybook/telemetry';
import { CommandOptions } from './generators/types';

function shouldSendError(options: CLIOptions | Parameters<typeof loadAllPresets>[0]) {
  if (options.disableTelemetry) return false;

  // If th
  if (!options.configDir) return true;

  // should we load the preset?
  const presets = loadAllPresets({
    corePresets: [require.resolve('./presets/common-preset')],
    overridePresets: [],
    ...options.cliOptions,
  });

  // should we prompt / check cache?
}

export async function withTelemetry(
  eventType: EventType,
  options: CLIOptions | Parameters<typeof loadAllPresets>[0],
  run: () => Promise<void>
) {
  telemetry('start', { payload: { eventType }, noUserData: true });

  try {
    await run();
  } catch (err) {
    // figure out if to send crash report
    if (shoudSend) {
      telemetry('error', { payload: { eventType, err } });
    }

    throw err;
  }
}
