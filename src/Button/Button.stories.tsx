import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, ButtonProps } from "./index";

export default {
  title: "Button",
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Test</Button>
);
const defaultArgs: ButtonProps = {
  secondary: false,
  reversed: false,
  fullWidth: false,
  small: false,
  loading: false
};

export const Primary = Template.bind({});
Primary.args = defaultArgs;

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  secondary: true
};
