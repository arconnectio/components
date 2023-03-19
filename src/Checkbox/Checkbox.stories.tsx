import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox } from "./index";

export default {
  title: "Checkbox",
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}>Test label</Checkbox>
);

export const Basic = Template.bind({});
