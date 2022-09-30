import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EyeIcon } from "@iconicicons/react";

import { Input, InputProps, SharedProps } from "./index";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input type="text" placeholder="Example text..." {...args}>Input label</Input>;
const defaultArgs: SharedProps & InputProps = {
  small: false,
  status: "default",
  fullWidth: false
};

export const Basic = Template.bind({});
Basic.args = defaultArgs;

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...defaultArgs,
  type: "password",
  icon: <EyeIcon style={{ cursor: "pointer" }} />
};
