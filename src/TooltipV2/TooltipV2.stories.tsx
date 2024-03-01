import { BoxIcon, CopyIcon, GlobeIcon, MaximizeIcon, SettingsIcon } from "@iconicicons/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { ComponentProps } from "react";
import { Spacer } from "../Spacer";
import { TooltipV2 } from ".";

export default {
  title: "TooltipV2",
  component: TooltipV2
} as ComponentMeta<typeof TooltipV2>;

const Template: ComponentStory<typeof TooltipV2> = (args) => (
  <Wrapper>
    <Extension>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        7xAR...37a1
        <TooltipV2
            content="Bottom"
            position="bottom"
        >
          <CopyIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.34rem" }}>
        <TooltipV2 content="Bottom" position="bottom">
          <BoxIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
        <TooltipV2
          content="Bottom"
          position="bottom"
        >
          <SettingsIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
        <TooltipV2 content="Left" position="left">
          <GlobeIcon style={{ cursor: "pointer" }} />
        </TooltipV2>        <TooltipV2
            content="Bottom End"
            position="bottomEnd"
        >
            <MaximizeIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
      </div>
    </Extension>
    <Spacer y={2} />
    <Extension>
      <div style={{ display: "flex", alignItems: "center", gap: "0.34rem" }}>
        <TooltipV2
            content="Top Start"
            position="topStart"
        >
            <MaximizeIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
        <TooltipV2 content="Right" position="right">
          <GlobeIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
        <TooltipV2
          content="Bottom"
          position="bottom"
        >
          <SettingsIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
        <TooltipV2 content="Bottom Start" position="bottomStart">
          <BoxIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <TooltipV2
            content="Top End"
            position="topEnd"
        >
          <CopyIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
        7xAR...37a1
      </div>
    </Extension>
  </Wrapper>
);

const defaultArgs: ComponentProps<typeof TooltipV2> = {
  position: "bottom",
  content: "Test content"
};

export const Header = Template.bind({});
Header.args = defaultArgs;

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

const Extension = styled.div`
  width: 377.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000000;
  padding: 20px;
`;
