import styled from "styled-components";
import { Loading } from "../Loading";

export const ButtonV2 = styled.button.attrs<ButtonV2Props>((props) => ({
  children: props.loading ? (
    <Loading style={{ margin: ".18rem 0" }} />
  ) : (
    props.children
  )
}))<ButtonV2Props>`
  display: flex;
  color: ${(props) =>
    props.disabled
      ? props.theme.displayTheme === "light"
        ? props.theme.secondaryBtnHover
        : props.theme.buttonDisabledText
      : props.theme.displayTheme === "light"
      ? props.secondary
        ? props.theme.primary
        : props.theme.backgroundv2
      : props.theme.primaryTextv2};
  background-color: ${(props) =>
    props.disabled
      ? props.theme.buttonDisabled
      : props.theme.displayTheme === "light"
      ? props.secondary
        ? "transparent"
        : props.theme.primary
      : props.secondary
      ? props.theme.backgroundSecondary
      : props.theme.primary};
  border: ${(props) =>
    props.secondary ? "1.5px solid " + props.theme.primary : "none"};
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 24px;
  width: ${(props) => (props.fullWidth ? "100%" : "250px")};
  min-width: 100px;
  height: 42px;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.icon ? "5px" : "0")};
  transition: all 0.23s ease-in-out;

  box-shadow: 0 0 0 0
    rgba(
      ${(props) => props.theme.theme},
      ${(props) => (props.secondary ? ".2" : 1)}
    );

  background-color: ${(props) =>
    props.secondary ? "transparent" : props.theme.primary};

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? "none"
        : props.secondary
        ? props.theme.secondaryBtnHover
        : props.theme.primaryBtnHover};
  }

  &:disabled {
    opacity: 0.87;
    cursor: not-allowed;
  }
`;

export interface ButtonV2Props {
  secondary?: boolean;
  fullWidth?: boolean;
  icon?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
