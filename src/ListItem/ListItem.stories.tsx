import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListItem } from "./index";
import { UserIcon } from "@iconicicons/react";

export default {
  title: "List Item",
  component: ListItem
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
    <ListItem {...args} />
);
const defaultArgs: ComponentProps<typeof ListItem> = {
  web: true,
  extension: false,
  active: false,
  title: "Contacts",
  description: "Add/edit contacts",
  img: UserIcon
};