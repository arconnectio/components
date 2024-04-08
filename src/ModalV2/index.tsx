import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

export function ModalV2({
  children,
  open,
  setOpen,
  actions,
  root
}: PropsWithChildren<ModalV2Props>) {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <ModalWrapper onClick={() => setOpen(false)}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalContent>{children}</ModalContent>
            {actions && <ModalActions>{actions}</ModalActions>}
          </ModalCard>
        </ModalWrapper>
      )}
    </AnimatePresence>,
    root || (document.getElementById("root") as any)
  );
}

const ModalWrapper = styled(motion.div).attrs({
  variants: {
    open: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    },
    closed: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    }
  },
  initial: "closed",
  animate: "open",
  exit: "closed"
})`
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 11000;
  background-color: rgba(19, 19, 19, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  overflow-y: auto;
  padding: 2rem 0;
`;

const ModalCard = styled.div`
  background-color: ${(props) =>
    props.theme.displayTheme === "light"
      ? props.theme.backgroundv2
      : props.theme.backgroundSecondary};
  outline: 1px solid #7866d3;
  border-radius: 10px;
  width: 300px;
  margin: auto;
  padding: 24px 30px;
  box-sizing: border-box;
  gap: 16px;
`;

const ModalContent = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.primaryTextv2};
  line-height: 25px;
  align-self: stretch;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 10px;
`;

interface ModalV2Props {
  open: boolean;
  setOpen: (open: boolean) => any;
  actions?: ReactNode;
  root?: Element | DocumentFragment;
}
