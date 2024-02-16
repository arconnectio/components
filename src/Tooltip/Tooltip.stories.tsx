import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { ComponentProps } from "react";
import { Tooltip } from "./index";

export default {
  title: "Tooltip",
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Wrapper>
    <Tooltip {...args}>Hover this</Tooltip>
  </Wrapper>
);
const defaultArgs: ComponentProps<typeof Tooltip> = {
  position: "bottom",
  content: "Test content"
};

export const Basic = Template.bind({});
Basic.args = defaultArgs;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: end;
`;