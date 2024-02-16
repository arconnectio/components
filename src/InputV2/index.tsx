import { HTMLProps, ReactNode, useMemo } from "react";
import styled from "styled-components";
import { InputStatus } from "../hooks";

export function InputV2({
  label,
  fullWidth,
  small,
  status = "default",
  disabled,
  dropdown,
  popup,
  search,
  icon,
  errorMessage,
  ...props
}: SharedPropsV2 & InputV2Props & HTMLProps<HTMLInputElement>) {
  const inputV2Props = useMemo<any>(
    () => ({ fullWidth, small, dropdown, popup, search, status, disabled, ...props }),
    [fullWidth, small, dropdown, popup, search, status, disabled, props]
  );

  return (
    <>
      {label && <LabelV2>{label}</LabelV2>}
      <InputV2Wrapper
        fullWidth={fullWidth}
        small={small}
        status={status ?? "default"}
      >
        <InputV2Element {...inputV2Props} disabled={disabled} />
        {icon && (
          <IconWrapperV2
            fullWidth={fullWidth}
            small={small}
            status={status ?? "default"}
          >
            {icon}
          </IconWrapperV2>
        )}
      </InputV2Wrapper>
      {status === "error" && <ErrorMsg>{errorMessage}</ErrorMsg>}
    </>
  );
}

export interface SharedPropsV2 {
  fullWidth?: boolean;
  small?: boolean;
  dropdown?: boolean;
  popup?: boolean;
  search?: boolean;
  status?: InputStatus;
  disabled?: boolean;
}

export interface InputV2Props {
  icon?: ReactNode;
  label?: ReactNode;
  errorMessage?: string;
}

export const InputV2Wrapper = styled.div<SharedPropsV2>`
  position: relative;
  display: flex;
  width: ${(props) => (props.fullWidth ? "calc(100% - 2px)" : "max-content")};
  border: 1.5px solid
    ${(props) =>
      props.status === "error"
        ? props.theme.fail
        : props.theme.inputField};
  border-radius: 10px;

  overflow: hidden;
  color: rgb(${(props) => props.theme.cardBorder});
  transition: all 0.13s ease-in-out;

  &:focus-within,
  &: hover {
    ${(props) => "border: 1.5px solid " + (props.status === "error" ? props.theme.fail : props.theme.primaryTextv2)};
  };
  
  &:active {
    border-color: ${(props) =>
      props.status === "error"
        ? props.theme.fail
        : props.theme.inputField};
    color: rgb(${(props) => props.theme.theme});
  }
`;

export const LabelV2 = styled.p`
  font-size:16px;
  font-weight: 500;
  color: ${(props) => props.theme.primaryTextv2}
  margin: 0;
  margin-bottom: 8px;
`;

export const ErrorMsg = styled.p`
  color: ${(props) => props.theme.fail};
  font-size: 12px;
  font-weight: 600;
  margin: 0;
`;

export const InputV2Element = styled.input<SharedPropsV2>`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.primaryTextv2};

  font-size: 16px;
  font-weight: 500;
  padding: ${(props) => 
    props.small ? "8.5px 15px" : "13.5px 15px"};
  line-height: 22px;
  width: 100%;
  transition: all 0.23s ease-in-out;

  ::-webkit-input-placeholder {
    color: rgb(
      ${(props) => props.theme.inputField});
  }

  :-ms-input-placeholder {
    color: rgb(${(props) => props.theme.inputField});
  }

  ::placeholder {
    color: rgb(${(props) => props.theme.inputField});
  }
`;

export const IconWrapperV2 = styled.div<SharedPropsV2>`
  position: absolute;
  width: 22px;
  height: 22px;
  z-index: 10;
  font-size: 16px;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: ${(props) => props.theme.primaryTextv2};
  cursor: pointer;
`;
