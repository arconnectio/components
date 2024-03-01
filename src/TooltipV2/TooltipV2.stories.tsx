import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { ComponentProps } from "react";
import { TooltipV2 } from ".";
import { BoxIcon, CopyIcon, GlobeIcon, MaximizeIcon, SettingsIcon } from "@iconicicons/react";

export default {
  title: "TooltipV2",
  component: TooltipV2
} as ComponentMeta<typeof TooltipV2>;

const Template: ComponentStory<typeof TooltipV2> = (args) => (
  <Wrapper>
    <TooltipV2 {...args}>
      <div style={{ cursor: "pointer" }}>Hover this</div>
    </TooltipV2>
  </Wrapper>
);

const Header: ComponentStory<typeof TooltipV2> = (args) => (
  <Wrapper>
    <Extension>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        7xAR...37a1
        <TooltipV2
            content="Copy address"
            position="bottom"
        >
          <CopyIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.34rem" }}>
        <TooltipV2 content="Viewblock" position="bottom">
          <BoxIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
        <TooltipV2
          content="Settings"
          position="bottom"
        >
          <SettingsIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
        <GlobeIcon />
        <TooltipV2
            content="Expand view"
            position="bottomEnd"
        >
            <MaximizeIcon style={{ cursor: "pointer" }} />
        </TooltipV2>
      </div>
    </Extension>
  </Wrapper>
);

const defaultArgs: ComponentProps<typeof TooltipV2> = {
  position: "bottom",
  content: "Test content"
};

export const Basic = Template.bind({});
Basic.args = defaultArgs;

export const ExtensionHeader = Header.bind({});
Basic.args = defaultArgs;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const Extension = styled.div`
  width: 377.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
