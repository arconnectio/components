import {
    IconWrapperV2,
    InputV2Wrapper,
    LabelV2
  } from "../InputV2";
  import { HTMLProps, PropsWithChildren, ReactNode, useMemo } from "react";
  import { ChevronDownIcon } from "@iconicicons/react";
  import styled from "styled-components";
import { InputStatus } from "../hooks";
  
  export function SelectV2({
    children,
    label,
    fullWidth,
    small,
    status = "default",
    ...props
  }: PropsWithChildren<SelectV2Props & HTMLProps<HTMLSelectElement>>) {
    const selectPropsV2 = useMemo<any>(
      () => ({ fullWidth, small, status, ...props }),
      [fullWidth, small, status, props]
    );
  
    return (
      <>
        {label && <LabelV2>{label}</LabelV2>}
        <InputV2Wrapper
          fullWidth={fullWidth}
          small={small}
          status={status ?? "default"}
        >
          <SelectElement {...selectPropsV2}>
            {children}
          </SelectElement>
          <IconWrapperV2
            fullWidth={fullWidth}
            small={small}
            status={status ?? "default"}
          >
            <ChevronDownIcon />
          </IconWrapperV2>
        </InputV2Wrapper>
      </>
    );
  }

  interface SelectV2Props {
    fullWidth?: boolean; 
    small?: boolean;
    label?: ReactNode;
    status?: InputStatus
  }
  
  const SelectElement = styled.select<SelectV2Props>`
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
    cursor: pointer;
    transition: all 0.23s ease-in-out;
    z-index: 15;

    -webkit-appearance: none;
    -moz-appearance: none;
  
    &::-ms-expand {
      display: none;
    };

    option {

    };
  `;
  