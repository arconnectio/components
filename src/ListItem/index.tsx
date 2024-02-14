import { HTMLProps, ReactNode } from "react";
import styled from "styled-components";
import { Text } from "../Text";

export function ListItem({
  children,
  web,
  extension,
  active,
  title,
  description,
  img,
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
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled(Squircle)`

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

interface Props {
  web?: boolean;
  extension?: boolean;
  active?: boolean;
  title: string | ReactNode;
  description: string | ReactNode;
  img?: string;
};