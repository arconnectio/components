import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Select } from "./index";
import { ComponentProps } from "react";

export default {
  title: "Select",
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <option value="test">Test option</option>
    <option value="second">Second option</option>
  </Select>
);
const defaultArgs: ComponentProps<typeof Select> = {
  small: false,
  status: "default",
  fullWidth: false,
  label: "Example label"
};

export const Basic = Template.bind({});
Basic.args = defaultArgs;
