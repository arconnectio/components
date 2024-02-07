import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ButtonV2, ButtonV2Props } from "./index";

export default {
  title: "ButtonV2",
  component: ButtonV2
} as ComponentMeta<typeof ButtonV2>;

const Template: ComponentStory<typeof ButtonV2> = (args) => (
  <ButtonV2 {...args}>Test</ButtonV2>
);
const defaultArgs: ButtonV2Props = {
  secondary: false,
  fullWidth: false,
  icon: false,
  disabled: false
};

export const Primary = Template.bind({});
Primary.args = defaultArgs;

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  secondary: true
}