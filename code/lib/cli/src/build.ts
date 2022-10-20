import { sync as readUpSync } from 'read-pkg-up';
import { logger } from '@storybook/node-logger';
import { buildStaticStandalone } from '@storybook/core-server';
import { cache } from '@storybook/core-common';
import { withTelemetry } from './withTelemetry';

export const build = async (cliOptions: any) => {
  try {
    const options = {
      ...cliOptions,
      configDir: cliOptions.configDir || './.storybook',
      outputDir: cliOptions.outputDir || './storybook-static',
      ignorePreview: !!cliOptions.previewUrl && !cliOptions.forceBuildPreview,
      docsMode: !!cliOptions.docs,
      configType: 'PRODUCTION',
      cache,
      packageJson: readUpSync({ cwd: __dirname }).packageJson,
    };
    await withTelemetry('build', options, async () => {
      // send event
      await buildStaticStandalone(options);
    });
  } catch (err) {
    // send error
    logger.error(err);
    process.exit(1);
  }
};
