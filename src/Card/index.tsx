import styled from "styled-components"

export const Card = styled.div<CardProps>`
  padding: ${props => props.smallPadding ? ".5rem .65rem" : "1rem 1.25rem"};
  border: 1px solid rgb(${props => props.theme.cardBorder});
  border-radius: 18px;
  background-color: rgb(${props => props.theme.cardBackground});
`;

export interface CardProps {
  smallPadding?: boolean;
}
