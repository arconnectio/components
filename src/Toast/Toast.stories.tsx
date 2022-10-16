import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react"

import { Toast } from "./index";
import { useToasts } from "./utils"

export default {
  title: "Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => (
  <Toast {...args}>
    This is the toast content
  </Toast>
);
const defaultArgs: ComponentProps<typeof Toast> = {
  close: () => {},
  duration: 4000,
  displayTheme: "light"
};

export const Info = Template.bind({});
Info.args = {
  ...defaultArgs,
  type: "info",
  action: {
    name: "Ok",
    task: () => alert("Action called")
  }
};

export const Error = Template.bind({});
Error.args = {
  ...defaultArgs,
  type: "error",
  action: {
    name: "Ok",
    task: () => alert("Action called")
  }
};

export const Success = Template.bind({});
Success.args = {
  ...defaultArgs,
  type: "success"
};

export const Test = () => {
  const { setToast } = useToasts();

  return <button onClick={() => setToast({ content: "test", duration: 3000 })}>ok</button>
}
