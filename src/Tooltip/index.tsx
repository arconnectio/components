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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
  display: inline-block;
  ${props => props.underline ? "border-bottom: 1px dotted rgb(" + props.theme.cardBorder + ");" : ""}
  ${props => props.underline ? "cursor: pointer;" : ""}
`;

const TooltipElement = styled(motion.div)<{ position: Position; }>`
  position: absolute;
  padding: .24rem .52rem;
  border-radius: 7px;
  font-size: 1rem;
  font-weight: 500;
  color: rgb(${props => props.theme.background});
  background-color: rgb(${props => props.theme.displayTheme === "dark" ? props.theme.cardBackground : props.theme.primaryText});
  z-index: 100;
  width: max-content;

  &::after {
    position: absolute;
    content: "";
    border: 4px solid;
    border-color: ${props => props.position.startsWith("top") ? "rgb(" + props.theme.primaryText + ")" : "transparent"} ${props => props.position.startsWith("right") ? "rgb(" + props.theme.primaryText + ")" : "transparent"} ${props => props.position.startsWith("bottom") ? "rgb(" + props.theme.primaryText + ")" : "transparent"} ${props => props.position.startsWith("left") ? "rgb(" + props.theme.primaryText + ")" : "transparent"};
    ${props => getArrowPosition(props.position)}
  }
`;
