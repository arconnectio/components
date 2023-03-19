import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Popover } from "./index";
import { ComponentProps } from "react";

export default {
  title: "Popover",
  component: Popover
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>Hover this</Popover>
);
const defaultArgs: ComponentProps<typeof Popover> = {
  position: "bottom",
  content: (
    <>
      This is a popover <br />
      Test
    </>
  ),
  mode: "click"
};

export const Basic = Template.bind({});
Basic.args = defaultArgs;
