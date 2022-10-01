import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "../Text";

import { Card } from "./index";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Normal: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <Text heading>Card title</Text>
    <Text style={{ margin: 0 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, alias sequi ab natus porro, nisi iste perferendis hic molestiae eligendi at deleniti quis quidem saepe odio deserunt dolorum architecto velit?</Text>
  </Card>
);

Normal.args = {
  smallPadding: false
};