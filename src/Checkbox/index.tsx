import { HTMLProps, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export function Checkbox({
  children,
  checked = false,
  onChange,
  ...props
}: CheckboxProps & Omit<HTMLProps<HTMLDivElement>, "onChange">) {
  const [state, setState] = useState(checked);
  const checkedPath = "M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75";

  useEffect(() => setState(checked), [checked]);

  async function toggle() {
    let newVal = state;

    setState((val) => {
      newVal = !val;
      return newVal;
    });

    if (onChange) {
      await onChange(newVal);
    }
  }

  return (
    <CheckboxWithLabel {...(props as any)} onClick={toggle}>
      <CheckboxWrapper>
        <IconWrapper state={state}>
          <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ d: checkedPath }}
              animate={{ d: state ? checkedPath : "" }}
              transition={{
                ease: "easeInOut",
                duration: .15
              }}
            />
          </motion.svg>
        </IconWrapper>
      </CheckboxWrapper>
      {children && <Label>{children}</Label>}
    </CheckboxWithLabel>
  );
}

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => any;
}

const CheckboxWithLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;

const Label = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: rgb(${(props) => props.theme.secondaryText});
  margin: 0;
`;

const CheckboxWrapper = styled.div`
  position: relative;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 100%;
  overflow: hidden;
  flex-shrink: 0;
  background-color: rgba(${props => props.theme.theme}, .15);
`;

const IconWrapper = styled(motion.div)<{ state: boolean; }>`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(${props => props.theme.theme});
  transition: color .17s ease;

  svg {
    font-size: 1rem;
    width: 1.1rem;
    height: 1.1rem;
  }
`;
