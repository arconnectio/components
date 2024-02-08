import { HTMLProps, ReactNode, useMemo } from "react";
import { InputStatus } from "../hooks";
import styled from "styled-components";

export function InputV2({
  fullWidth,
  small,
  dropdown,
  general,
  popup,
  search,
  status = "default",
  alternative,
  icon,
  ...props
}: SharedPropsV2 & InputV2Props & HTMLProps<HTMLInputElement>) {
  const inputV2Props = useMemo<any>(
    () => ({ fullWidth, small, dropdown, general, popup, search, status, alternative, ...props }),
    [fullWidth, small, dropdown, general, popup, search, status, alternative, props]
  );

  return (
    <>
      <InputV2Wrapper
        fullWidth={fullWidth}
        alternative={alternative}
        small={small}
        status={status ?? "default"}
      >
        <InputV2Element {...inputV2Props} />
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
    </>
  );
}

export interface SharedPropsV2 {
  fullWidth?: boolean;
  alternative?: boolean;
  small?: boolean;
  dropdown?: boolean;
  general?: boolean;
  popup?: boolean;
  search?: boolean;
  status?: InputStatus;
}

export interface InputV2Props {
  icon?: ReactNode;
}

const statusColors = {
  success: "#14D110",
  error: "#FF0000",
  warning: "#FFB800"
};

export const InputV2Wrapper = styled.div<SharedPropsV2>`
  position: relative;
  display: flex;
  width: ${(props) => (props.fullWidth ? "calc(100% - 2px)" : "max-content")};
  border: 1.5px solid
    ${(props) =>
      props.status === "default" || !props.status
        ? "#847F90"
        : statusColors[props.status]};
  border-radius: 10px;

  overflow: hidden;
  color: rgb(${(props) => props.theme.cardBorder});
  transition: all 0.13s ease-in-out;

  &: hover {
    border: 1.5px solid #FFFFFF;
  };

  &:focus-within,
  &:active {
    border-color: ${(props) =>
      props.status === "default" || !props.status
        ? "#FFFFFF"
        : statusColors[props.status]};
    color: rgb(${(props) => props.theme.theme});
  }
`;

export const InputV2Element = styled.input<SharedPropsV2>`
  outline: none;
  border: none;
  background-color: ${(props) =>
    props.alternative ? "rgba(171, 154, 255, 0.15)" : "transparent"};
  color: rgb(
    ${(props) => (props.alternative ? "185, 185, 185" : props.theme.theme)}
  );

  font-size: 16px;
  font-weight: 500;
  padding: ${(props) => 
    props.small ? "10px 15px" : "15px"};
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
        props.alternative ? "185, 185, 185" : "#847F90"}
    );
  }

  :-ms-input-placeholder {
    color: rgb(
      ${(props) =>
        props.alternative ? "185, 185, 185" : "#847F90"}
    );
  }

  ::placeholder {
    color: rgb(
      ${(props) =>
        props.alternative ? "185, 185, 185" : "#847F90"}
    );
  }
`;

export const IconWrapperV2 = styled.div<SharedPropsV2>`
  position: absolute;
  display: flex;
  width: 22px;
  height: 22px;
  z-index: 10;
  font-size: 1.2rem;
  top: 50%;
  right: 1.25rem;
  transform: translateY(-50%);
`;
