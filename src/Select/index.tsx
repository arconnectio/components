import { IconWrapper, InputProps, InputWrapper, Label, SharedProps, side_padding, top_padding } from "../Input";
import { HTMLProps, PropsWithChildren, useMemo } from "react";
import { ChevronDownIcon } from "@iconicicons/react";
import styled from "styled-components";

export function Select({ children, label, fullWidth, small, status = "default", icon, ...props }: PropsWithChildren<SharedProps & InputProps & HTMLProps<HTMLSelectElement>>) {
  const selectProps = useMemo<any>(() => ({ fullWidth, small, status, ...props }), [fullWidth, small, status, props]);

  return (
    <>
      {label && (
        <Label>
          {label}
        </Label>
      )}
      <SelectWrapper fullWidth={fullWidth} small={small} status={status ?? "default"}>
        <SelectElement {...selectProps}>
          {children}
        </SelectElement>
        <IconWrapper fullWidth={fullWidth} small={small} status={status ?? "default"}>
          {icon || <ChevronDownIcon />}
        </IconWrapper>
      </SelectWrapper>
    </>
  );
}

const SelectWrapper = styled(InputWrapper)`
  color: rgb(${props => props.theme.theme});
`;

const SelectElement = styled.select<SharedProps>`
  outline: none;
  border: none;
  background-color: transparent;
  color: rgb(${props => props.theme.theme});
  font-size: ${props => props.small ? ".9rem" : "1.2rem"};
  font-weight: 500;
  padding: ${({ small }) => (small ? top_padding / 3 * 2 : top_padding) + "rem"} ${({ small }) => (small ? side_padding / 3 * 2 : top_padding) + "rem"};
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  z-index: 15;
  transition: all .23s ease-in-out;

  &::-ms-expand {
    display: none;
  }
`;
