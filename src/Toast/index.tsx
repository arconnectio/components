import { CheckCircleIcon, CloseIcon, InformationIcon, TargetIcon } from "@iconicicons/react";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { DisplayTheme } from "../Provider";
import { motion } from "framer-motion";
import styled from "styled-components";

export function Toast({ children, duration, action, displayTheme, type = "info", close, addedAt }: PropsWithChildren<ToastProps>) {
  const [progress, setProgress] = useState<number>(100);

  // update progress based on the total duration
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress === 0) {
        clearInterval(interval);
        return;
      }
      
      const time = new Date().getTime();

      setProgress(100 - (time - addedAt) / duration * 100);
    }, duration / 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <ToastWrapper displayTheme={displayTheme}>
      <ChildrenWithIcon>
        <Icon
          as={type === "info" ? InformationIcon : (type === "error" ? TargetIcon : CheckCircleIcon)}
          type={type}
        />
        <ChildrenWrapper>
          {children}
        </ChildrenWrapper>
      </ChildrenWithIcon>
      <Actions>
        {action && (
          <ActionButton onClick={async () => {
            await action.task();
            close();
          }}>
            {action.name}
          </ActionButton>
        )}
        <CloseButton onClick={close}>
          <XIcon />
        </CloseButton>
      </Actions>
      {progress > 0 && (
        <Progress type={type} progress={progress} />
      )}
    </ToastWrapper>
  );
}

export interface ToastProps {
  duration: number;
  action?: ToastAction;
  addedAt: number;
  displayTheme: DisplayTheme;
  type?: ToastType;
  close: (...args: any[]) => any;
}

export type ToastType = "error" | "success" | "info";

export interface ToastAction {
  name: string;
  task: (...args: any[]) => any;
};

const progressHeight = ".2rem";

const ToastWrapper = styled(motion.div).attrs({
  initial: {
    opacity: 0,
    translateY: "-100%",
    scale: .85,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  },
  animate: {
    opacity: 1,
    translateY: 0,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  }
})<{ displayTheme: DisplayTheme }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  background-color: #000;
  border-radius: 8px;
  padding: .5rem 1.1rem calc(.5rem + ${progressHeight});
  overflow: hidden;
  border: ${props => props.displayTheme === "light" ? "none" : "2px solid rgb(" + props.theme.cardBorder + ")"};
  transition: all .23s ease-in-out;
`;

const resultColors = {
  success: "20, 209, 16",
  error: "255, 0, 0"
};

const Progress = styled.div<{ type: ToastType; progress: number; }>`
  position: absolute;
  bottom: 0;
  right: 0;
  height: ${progressHeight};
  width: ${props => props.progress || "100"}%;
  background-color: rgb(${props => props.type === "info" ? props.theme.theme : resultColors[props.type]});
  transition: all .05s ease-in-out;
`;

const child_padding = ".35rem";

const ChildrenWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: .45rem;
`;

const Icon = styled(InformationIcon)<{ type: ToastType; }>`
  font-size: 1.25rem;
  width: 1em;
  height: 1em;
  color: rgb(${props => props.type === "info" ? props.theme.theme : resultColors[props.type]});
`;

const ChildrenWrapper = styled.div`
  padding: ${child_padding} 0;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
`;

const action_button_font_size = "1rem";

const ActionButton = styled.button`
  font-size: ${action_button_font_size};
  font-weight: 500;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  padding: ${child_padding} .9rem;
  background-color: transparent;
  transition: all .23s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, .22);
  }
`;

const CloseButton = styled(ActionButton)`
  position: relative;
  border-radius: 100%;
  padding: 0;
  width: calc(${child_padding} * 2 + ${action_button_font_size});
  height: calc(${child_padding} * 2 + ${action_button_font_size});
`;

const XIcon = styled(CloseIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.2em;
  width: 1em;
  height: 1em;
  color: #fff;
  transform: translate(-50%, -50%);
`;
