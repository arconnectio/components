import { HTMLProps, PropsWithChildren, ReactNode, useMemo } from "react";
import { InputStatus } from "~hooks";
import styled from "styled-components";

export function Input({ label, fullWidth, small, status = "default", icon, ...props }: SharedProps & InputProps & HTMLProps<HTMLInputElement>) {
  const inputProps = useMemo<any>(() => ({ fullWidth, small, status, ...props }), [fullWidth, small, status, props]);

  return (
    <>
      {label && (
        <Label>
          {label}
        </Label>
      )}
      <InputWrapper fullWidth={fullWidth} small={small} status={status ?? "default"}>
        <InputElement {...inputProps} />
        {icon && (
          <IconWrapper fullWidth={fullWidth} small={small} status={status ?? "default"}>
            {icon}
          </IconWrapper>
        )}
      </InputWrapper>
    </>
  );
}

export interface SharedProps {
  fullWidth?: boolean;
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
  width: ${props => props.fullWidth ? "100%" : "max-content"};
  border: 2.5px solid ${props => (props.status === "default" || !props.status) ? "rgb(" + props.theme.cardBorder + ")" : statusColors[props.status]};
  border-radius: ${props => props.small ? "15px" : "22px"};
  overflow: hidden;
  color: rgb(${props => props.theme.cardBorder});
  transition: all .23s ease-in-out;

  &:focus-within, &:active {
    border-color: ${props => (props.status === "default" || !props.status) ? "rgba(" + props.theme.theme + ", .5)" : statusColors[props.status]};
    color: rgb(${props => props.theme.theme});
  }
`;

export const Label = styled.p`
  font-size: .7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: rgb(${props => props.theme.secondaryText});
  margin: 0;
  margin-bottom: .8em;
`;

export const side_padding = 1.25;
export const top_padding = 1;

const InputElement = styled.input<SharedProps>`
  outline: none;
  border: none;
  background-color: transparent;
  color: rgb(${props => props.theme.theme});
  font-size: ${props => props.small ? ".9rem" : "1.2rem"};
  font-weight: 600;
  padding: ${({ small }) => (small ? top_padding / 3 * 2 : top_padding) + "rem"} ${({ small }) => (small ? side_padding / 3 * 2 : top_padding) + "rem"};
  width: 100%;
  transition: all .23s ease-in-out;

  ::-webkit-input-placeholder {
    color: rgb(${props => props.theme.cardBorder});
  }

  :-ms-input-placeholder {
    color: rgb(${props => props.theme.cardBorder});
  }

  ::placeholder {
    color: rgb(${props => props.theme.cardBorder});
  }
`;

export const IconWrapper = styled.div<SharedProps>`
  position: absolute;
  display: flex;
  z-index: 10;
  font-size: ${props => props.small ? ".9rem" : "1.2rem"};
  top: 50%;
  right: ${props => props.small ? side_padding / 3 * 2 : side_padding}rem;
  transform: translateY(-50%);
`;
