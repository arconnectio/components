import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SelectV2 } from "./index";
import { ComponentProps } from "react";

export default {
  title: "SelectV2",
  component: SelectV2
} as ComponentMeta<typeof SelectV2>;

const Template: ComponentStory<typeof SelectV2> = (args) => (
  <SelectV2 {...args}>
    <option value="test">Test option</option>
    <option value="second">Second option</option>
  </SelectV2>
);
const defaultArgs: ComponentProps<typeof SelectV2> = {
  small: false,
  status: "default",
  fullWidth: false,
  label: "Example label"
};

export const Basic = Template.bind({});
Basic.args = defaultArgs;
