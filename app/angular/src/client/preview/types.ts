import { StoryFn } from '@storybook/addons';

export declare const moduleMetadata: (
  metadata: Partial<NgModuleMetadata>
) => (storyFn: StoryFn) => any;

export interface NgModuleMetadata {
  declarations?: any[];
  entryComponents?: any[];
  imports?: any[];
  schemas?: any[];
  providers?: any[];
}
export interface ICollection {
  [p: string]: any;
}

export interface IStorybookStory {
  name: string;
  render: () => any;
}

// @deprecated Use IStorybookSection instead
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IStoribookSection extends IStorybookSection {}

export interface IStorybookSection {
  kind: string;
  stories: IStorybookStory[];
}

export interface StoryFnAngularReturnType {
  props?: ICollection;
  moduleMetadata?: Partial<NgModuleMetadata>;
  component?: any;
  template?: string;
}
