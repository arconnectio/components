import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FileInput } from "./index";

export default {
  title: "FileInput",
  component: FileInput,
} as ComponentMeta<typeof FileInput>;

export const Basic: ComponentStory<typeof FileInput> = (args) => (
  <FileInput {...args}>
    Drag and drop your files
  </FileInput>
);

