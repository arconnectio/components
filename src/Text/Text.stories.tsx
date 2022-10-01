import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text } from "./index";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Texts = () => (
  <>
    <Text title>Title</Text>
    <Text subtitle>Subtitle</Text>
    <Text heading>Heading</Text>
    <Text>This is a paragraph. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, inventore. Aspernatur ratione optio sapiente labore voluptatibus, recusandae magnam laborum! Commodi exercitationem officiis nostrum libero repellendus numquam deleniti incidunt quibusdam quidem?</Text>
  </>
);