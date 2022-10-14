import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tooltip } from "./index";
import { ComponentProps } from "react";

export default {
  title: "Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    Hover this
  </Tooltip>
);
const defaultArgs: ComponentProps<typeof Tooltip> = {
  position: "bottom",
  content: "Test content"
};

export const Basic = Template.bind({});
Basic.args = defaultArgs;
