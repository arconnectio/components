import styled from "styled-components";
import { Loading } from "../Loading";

export const Button = styled.button.attrs<ButtonProps>((props) => ({
  children: props.loading ? (
    <Loading style={{ margin: ".18rem 0" }} />
  ) : (
    props.children
  )
}))<ButtonProps>`
  display: flex;
  color: rgb(
    ${(props) =>
      props.secondary
        ? props.theme.theme
        : props.reversed
        ? props.theme.primaryText
        : "255, 255, 255"}
  );
  background-color: rgba(
    ${(props) =>
      props.secondary
        ? props.theme.theme + ", .2"
        : (props.reversed ? props.theme.background : props.theme.theme) + ", 1"}
  );
  border: none;
  outline: none;
  cursor: pointer;
  font-size: ${(props) => (props.small ? ".83rem" : "1.05rem")};
  font-weight: 600;
  padding: ${(props) => (props.small ? ".9rem" : "1.2rem")}
    ${(props) => (props.fullWidth ? "0" : props.small ? "2rem" : "3.35rem")};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  border-radius: ${(props) => (props.small ? "19px" : "25px")};
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  transition: all 0.23s ease-in-out;

  box-shadow: 0 0 0 0
    rgba(
      ${(props) =>
        props.reversed ? props.theme.background : props.theme.theme},
      ${(props) => (props.secondary ? ".2" : 1)}
    );

  &:hover:not(:active):not(:disabled) {
    box-shadow: 0 0 0 ${(props) => (props.small ? ".19rem" : ".25rem")}
      rgba(
        ${(props) =>
          props.reversed ? props.theme.background : props.theme.theme},
        ${(props) => (props.secondary ? ".2" : 1)}
      );
  }

  &:disabled {
    opacity: 0.87;
    cursor: not-allowed;
  }
`;

export interface ButtonProps {
  secondary?: boolean;
  reversed?: boolean;
  small?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}
