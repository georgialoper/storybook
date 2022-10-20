import type { AnyFramework, StoryContext as StoryContextBase } from '@storybook/csf';
import type { ConcreteComponent } from 'vue';

export type { RenderContext } from '@storybook/core-client';

export interface ShowErrorArgs {
  title: string;
  description: string;
}

export type StoryFnVueReturnType = ConcreteComponent<any>;

export type StoryContext = StoryContextBase<VueFramework>;

export interface VueFramework extends AnyFramework {
  component: Omit<ConcreteComponent<this['T']>, 'props'>;
  storyResult: StoryFnVueReturnType;
}
