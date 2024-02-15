import type { DragControls } from "framer-motion";
import { SettingsIcon } from "@iconicicons/react";
import { HTMLProps, ReactNode } from "react";
import ReorderIcon from "../ReorderIcon";
import styled from "styled-components";
import Squircle from "../Squircle";
import { Text } from "../Text";

export function ListItem({
  children,
  web,
  extension,
  active,
  title,
  description,
  img,
  dragControls,
  ...props
}: Props & HTMLProps<HTMLDivElement>) {
  return (
    <Wrapper active={active} {...(props as any)}>
      <ContentWrapper>
        <IconWrapper img={img}>{children}</IconWrapper>
        <div>
          <ItemName>{title}</ItemName>
          <ItemDescription>{description}</ItemDescription>
        </div>
      </ContentWrapper>
      {dragControls && <ReorderIcon dragControls={dragControls} />}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  padding: 15px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled(Squircle)`
  position: relative;
  flex-shrink: 0;
  width: 2.6rem;
  height: 2.6rem;
  color: rgb(${(props) => props.theme.theme});
`;

const ItemName = styled(Text).attrs({
  noMargin: true,
  heading: true
})`
  font-weight: 500;
  font-size: 1.2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
`;

const ItemDescription = styled(Text).attrs({
  noMargin: true
})`
  font-size: 0.82rem;
`;

export const ListItemIcon = styled(SettingsIcon)`
  position: absolute;
  font-size: 1.5rem;
  width: 1em;
  height: 1em;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface Props {
  web?: boolean;
  extension?: boolean;
  active?: boolean;
  title: string | ReactNode;
  description: string | ReactNode;
  img?: string;
  dragControls?: DragControls;
};