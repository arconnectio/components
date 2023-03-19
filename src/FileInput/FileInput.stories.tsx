import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useRef } from "react";

import { FileInput } from "./index";

export default {
  title: "FileInput",
  component: FileInput
} as ComponentMeta<typeof FileInput>;

export const Basic: ComponentStory<typeof FileInput> = (args) => {
  const ref = useRef<HTMLInputElement>();

  useEffect(() => console.log(ref), [ref.current]);

  return (
    <FileInput {...args} inputRef={ref}>
      Drag and drop your files
    </FileInput>
  );
};
