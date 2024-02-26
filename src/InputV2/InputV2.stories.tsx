import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputV2 } from "./index";
import { ComponentProps } from "react";

export default {
  title: "InputV2",
  component: InputV2
} as ComponentMeta<typeof InputV2>;

const Template: ComponentStory<typeof InputV2> = (args) => {
  return (
    <InputV2 type="text" {...args} />
  );
};

const defaultArgs: ComponentProps<typeof InputV2> = {
  small: false,
  fullWidth: false,
  dropdown: false,
  popup: false,
  search: false,
  status: "default",
  disabled: false,
  errorMessage: "Error: payment method not accepted",
  placeholder: "Select an option",
  label: "Label"
};

export const Basic = Template.bind({});
Basic.args = {
  ...defaultArgs
};