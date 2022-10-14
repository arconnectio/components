import { PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";
import { Position, getPosition } from "../Tooltip/position";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../Card";
import styled from "styled-components";

export function Popover({ children, content, position = "top", mode = "click", ...props }: PropsWithChildren<PopoverProps>) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClicks);

    return () => {
      document.removeEventListener("mousedown", handleClicks);
    };
  });

  const popoverRef = useRef<HTMLDivElement>();
  const wrapperRef = useRef<HTMLDivElement>();

  function handleClicks(e: MouseEvent) {
    if (mode !== "click") return;
    if (!isOpen && wrapperRef.current?.contains(e.target as Node)) setOpen(true);
    else if (isOpen && !popoverRef.current?.contains(e.target as Node))
      setOpen(false);
  }

  return (
    <PopoverWrapper
      onMouseEnter={() => {
        if (mode === "hover") setOpen(true);
      }}
      onMouseLeave={() => {
        if (mode === "hover") setOpen(false);
      }}
      ref={wrapperRef as any}
    >
      <AnimatePresence>
        {isOpen && (
          <PopoverElement
            style={getPosition(position)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.23, ease: "easeInOut" }}
            ref={popoverRef as any}
          >
            <Card {...props}>
              {content}
            </Card>
          </PopoverElement>
        )}
      </AnimatePresence>
      {children}
    </PopoverWrapper>
  );
}

export interface PopoverProps {
  content: ReactNode;
  position?: Position;
  mode?: "click" | "hover";
};

const PopoverWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const PopoverElement = styled(motion.div)`
  position: absolute;
  z-index: 100;
`;
