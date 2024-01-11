import { HTMLProps, ReactNode, useMemo } from "react";
import { InputStatus } from "../hooks";
import styled from "styled-components";

export function Input({
  label,
  fullWidth,
  small,
  status = "default",
  alternative,
  icon,
  ...props
}: SharedProps & InputProps & HTMLProps<HTMLInputElement>) {
  const inputProps = useMemo<any>(
    () => ({ fullWidth, small, status, alternative, ...props }),
    [fullWidth, small, status, alternative, props]
  );

  return (
    <>
      {label && <Label>{label}</Label>}
      <InputWrapper
        fullWidth={fullWidth}
        alternative={alternative}
        small={small}
        status={status ?? "default"}
      >
        <InputElement {...inputProps} />
        {icon && (
          <IconWrapper
            fullWidth={fullWidth}
            small={small}
            status={status ?? "default"}
          >
            {icon}
          </IconWrapper>
        )}
      </InputWrapper>
    </>
  );
}

export interface SharedProps {
  fullWidth?: boolean;
  alternative?: boolean;
  small?: boolean;
  status?: InputStatus;
}

export interface InputProps {
  icon?: ReactNode;
  label?: ReactNode;
}

const statusColors = {
  success: "#14D110",
  error: "#FF0000",
  warning: "#FFB800"
};

export const InputWrapper = styled.div<SharedProps>`
  position: relative;
  display: flex;
  width: ${(props) => (props.fullWidth ? "calc(100% - 2px)" : "max-content")};
  border: 1px solid
    ${(props) =>
      props.status === "default" || !props.status
        ? "rgb(" + props.theme.cardBorder + ")"
        : statusColors[props.status]};
  border-radius: ${(props) =>
    props.alternative ? "10" : props.small ? "14" : "18"}px;

  overflow: hidden;
  color: rgb(${(props) => props.theme.cardBorder});
  transition: all 0.13s ease-in-out;

  &:focus-within,
  &:active {
    border-color: ${(props) =>
      props.status === "default" || !props.status
        ? "rgba(" + props.theme.theme + ", .5)"
        : statusColors[props.status]};
    color: rgb(${(props) => props.theme.theme});
    box-shadow: 0 0 0 1px
      ${(props) =>
        props.status === "default" || !props.status
          ? "rgba(" + props.theme.theme + ", .5)"
          : statusColors[props.status]};
  }
`;

export const Label = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  color: rgb(${(props) => props.theme.secondaryText});
  margin: 0;
  margin-bottom: 0.8em;
`;

export const side_padding = 1.25;
export const top_padding = 0.75;

export const InputElement = styled.input<SharedProps>`
  outline: none;
  border: none;
  background-color: ${(props) =>
    props.alternative ? "rgba(171, 154, 255, 0.15)" : "transparent"};
  color: rgb(
    ${(props) => (props.alternative ? "185, 185, 185" : props.theme.theme)}
  );

  font-size: ${(props) => (props.small ? ".9rem" : "1.2rem")};
  font-weight: 500;
  padding: ${({ small }) =>
      (small ? (top_padding / 3) * 2 : top_padding) + "rem"}
    ${({ small }) => (small ? (side_padding / 3) * 2 : side_padding) + "rem"};
  width: 100%;
  transition: all 0.23s ease-in-out;

  ${(props) =>
    props.alternative &&
    props.type === "number" &&
    `
    -moz-appearance: textfield; 
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `}
  ::-webkit-input-placeholder {
    color: rgb(
      ${(props) =>
        props.alternative ? "185, 185, 185" : props.theme.cardBorder}
    );
  }

  :-ms-input-placeholder {
    color: rgb(
      ${(props) =>
        props.alternative ? "185, 185, 185" : props.theme.cardBorder}
    );
  }

  ::placeholder {
    color: rgb(
      ${(props) =>
        props.alternative ? "185, 185, 185" : props.theme.cardBorder}
    );
  }
`;

export const IconWrapper = styled.div<SharedProps>`
  position: absolute;
  display: flex;
  z-index: 10;
  font-size: ${(props) => (props.small ? ".9rem" : "1.2rem")};
  top: 50%;
  right: ${(props) => (props.small ? (side_padding / 3) * 2 : side_padding)}rem;
  transform: translateY(-50%);
`;
