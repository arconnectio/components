import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input, InputProps, SharedProps } from "./index";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} type="text" placeholder="Example text...">Input label</Input>;
const defaultArgs: SharedProps & InputProps = {
  small: false,
  status: "default",
  fullWidth: false
};

export const Basic = Template.bind({});
Basic.args = defaultArgs;
