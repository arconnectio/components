import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EyeIcon } from "@iconicicons/react";

import { Input } from "./index";
import { ComponentProps } from "react";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input type="text" {...args} />;
const defaultArgs: ComponentProps<typeof Input> = {
  small: false,
  status: "default",
  fullWidth: false,
  placeholder: "Example text...",
  label: "Example label"
};

export const Basic = Template.bind({});
Basic.args = defaultArgs;

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...defaultArgs,
  type: "password",
  label: "Password",
  placeholder: "Enter password...",
  icon: <EyeIcon style={{ cursor: "pointer" }} />
};
