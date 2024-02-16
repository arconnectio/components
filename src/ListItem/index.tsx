import type { DragControls } from "framer-motion";
import { SettingsIcon } from "@iconicicons/react";
import { HTMLProps, ReactNode } from "react";
import ReorderIcon from "../ReorderIcon";
import styled from "styled-components";
import Squircle from "../Squircle";
import { Text } from "../Text";

export function ListItem({
  children,
  small = false,
  active,
  title,
  description,
  img,
  dragControls,
  ...props
}: Props & HTMLProps<HTMLDivElement>) {
  return (
    <Wrapper small={small} active={active} {...(props as any)}>
      <ContentWrapper small={small}>
        <IconWrapper small={small} img={img}>{children}</IconWrapper>
        <div>
          <ItemName small={small}>{title}</ItemName>
          <ItemDescription small={small}>{description}</ItemDescription>
        </div>
      </ContentWrapper>
      {dragControls && <ReorderIcon dragControls={dragControls} />}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ active: boolean, small: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${(props) => props.small ? "10px" : "20px"};
  overflow: hidden;
  cursor: pointer;
  padding: ${(props) => props.small ? "10px" : "15px"};
  background-color: ${(props) => props.active ? props.theme.secondaryBtnHover : "transparent"};
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.secondaryBtnHover};
  }
`;

const ContentWrapper = styled.div<{ small: boolean }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.small ? "12px" : "17px"};
`;

const IconWrapper = styled(Squircle)<{ small: boolean }>`
  position: relative;
  flex-shrink: 0;
  width: ${(props) => props.small ? "32px" : "48px"};
  height: ${(props) => props.small ? "32px" : "48px"};
  color: rgb(${(props) => props.theme.theme});
`;

const ItemName = styled(Text).attrs({
  noMargin: true,
  heading: true
})<{ small: boolean }>`
  font-weight: ${(props) => props.small ? "500" : "600"}
  font-size: ${(props) => props.small ? "16px" : "20px"}
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
`;

const ItemDescription = styled(Text).attrs({
  noMargin: true
})<{ small: boolean }>`
  font-size: ${(props) => props.small ? "10px" : "14px"}
  font-weight: 500;
`;

export const ListItemIcon = styled(SettingsIcon)`
  position: absolute;
  font-size: 1.5rem;
  width: 1.3em;
  height: 1.3em;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface Props {
  small?: boolean;
  active?: boolean;
  title: string | ReactNode;
  description: string | ReactNode;
  img?: string;
  dragControls?: DragControls;
};