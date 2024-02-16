import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListItem, ListItemIcon } from "./index";
import { ComponentProps } from "react";

export default {
  title: "ListItem",
  component: ListItem
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
    <ListItem {...args}>
      <ListItemIcon />
    </ListItem>
);
const defaultArgs: ComponentProps<typeof ListItem> = {
  small: false,
  active: false,
  title: "Contacts",
  description: "Add/edit contacts",
  dragControls: undefined
};

export const Basic = Template.bind({});
Basic.args = defaultArgs;

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  small: true,
  active: false,
  title: "USD",
  description: "United States Dollar"
};