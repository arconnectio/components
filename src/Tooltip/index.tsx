import { PropsWithChildren, ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Position, getPosition, getArrowPosition } from "./position";
import styled from "styled-components";

export function Tooltip({ children, content, underline = false, position = "top", ...props }: PropsWithChildren<TooltipProps>) {
  const [isOpen, setOpen] = useState(false);

  return (
    <TooltipWrapper
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      underline={underline}
    >
      <AnimatePresence>
        {isOpen && (
          <TooltipElement
            {...props}
            position={position}
            style={getPosition(position)}
            initial={{
              opacity: 0,
              transform: (getPosition(position)?.transform || "") + " scale(.95)"
            }}
            animate={{
              opacity: 1,
              transform: (getPosition(position)?.transform || "") + " scale(1)"
            }}
            exit={{
              opacity: 0,
              transform: (getPosition(position)?.transform || "") + " scale(.95)"
            }}
            transition={{ duration: 0.23, ease: "easeInOut" }}
          >
            {content}
          </TooltipElement>
        )}
      </AnimatePresence>
      {children}
    </TooltipWrapper>
  );
}

export interface TooltipProps {
  content: ReactNode;
  position?: Position;
  underline?: boolean;
};

const TooltipWrapper = styled.div<{ underline?: boolean; }>`
  position: relative;
  display: inline-flex;
  ${props => props.underline ? "border-bottom: 1px dotted rgb(" + props.theme.cardBorder + ");" : ""}
  ${props => props.underline ? "cursor: pointer;" : ""}
`;

const TooltipElement = styled(motion.div)<{ position: Position; }>`
  position: absolute;
  padding: .37rem .58rem;
  border-radius: 7px;
  font-size: .86rem;
  font-weight: 600;
  color: #eaeaea;
  background-color: #18191C;
  z-index: 100;
  width: max-content;
  box-shadow: 0 8px 16px rgba(0, 0, 0, .14);

  &::after {
    position: absolute;
    content: "";
    border: 4px solid;
    border-color: ${props => props.position.startsWith("top") ? "#18191C" : "transparent"} ${props => props.position.startsWith("right") ? "#18191C" : "transparent"} ${props => props.position.startsWith("bottom") ? "#18191C" : "transparent"} ${props => props.position.startsWith("left") ? "#18191C" : "transparent"};
    ${props => getArrowPosition(props.position)}
  }
`;
