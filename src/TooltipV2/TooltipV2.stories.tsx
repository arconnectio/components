import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { ComponentProps } from "react";
import { TooltipV2 } from ".";

export default {
  title: "TooltipV2",
  component: TooltipV2
} as ComponentMeta<typeof TooltipV2>;

const Template: ComponentStory<typeof TooltipV2> = (args) => (
  <Wrapper>
    <TooltipV2 {...args}>Hover this</TooltipV2>
  </Wrapper>
);
const defaultArgs: ComponentProps<typeof TooltipV2> = {
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