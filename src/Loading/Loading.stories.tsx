import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Loading } from "./index";

export default {
  title: "Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

export const Basic: ComponentStory<typeof Loading> = (args) => (
  <Loading />
);
