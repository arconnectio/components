import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "@iconicicons/react";
import { HTMLProps, useState } from "react";
import styled from "styled-components";

export function Checkbox({ children, checked = false, onChange, ...props }: CheckboxProps & HTMLProps<HTMLDivElement>) {
  const [state, setState] = useState(checked);

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
    <CheckboxWithLabel {...props as any} onClick={toggle}>
      <CheckboxWrapper>
        <AnimatePresence>
          {state && (
            <IconWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.13 }}
            >
              <CheckedIcon />
            </IconWrapper>
          )}
        </AnimatePresence>
      </CheckboxWrapper>
      {children && (
        <Label>
          {children}
        </Label>
      )}
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
  gap: .46rem;
  cursor: pointer;
`;

const Label = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: rgb(${props => props.theme.theme});
  margin: 0;
`;

const CheckboxWrapper = styled.div`
  position: relative;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 8px;
  border: 2px solid rgb(${props => props.theme.cardBorder});
`;

const IconWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CheckedIcon = styled(CheckIcon)`
  font-size: 1rem;
  color: rgb(${props => props.theme.theme});
  width: 1.1rem;
  height: 1.1rem;
`;
