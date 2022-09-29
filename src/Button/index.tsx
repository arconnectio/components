import styled from "styled-components";

export const Button = styled.button<ButtonProps>`
  
`;

export interface ButtonProps {
  secondary?: boolean;
  fullWidth?: boolean;
}
