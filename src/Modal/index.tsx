import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, ReactNode } from "react";
import { Card } from "../Card";
import styled from "styled-components";

export function Modal({ children, open, setOpen, actions }: PropsWithChildren<ModalProps>) {
  return (
    <AnimatePresence>
      {open && (
        <ModalWrapper onClick={() => setOpen(false)}>
          <ModalCard onClick={e => e.stopPropagation()}>
            <ModalContent>
              {children}
            </ModalContent>
            {actions && (
              <ModalActions>
                {actions}
              </ModalActions>
            )}
          </ModalCard>
        </ModalWrapper>
      )}
    </AnimatePresence>
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
  align-items: center;
  justify-content: center;
  z-index: 11000;
  background-color: rgba(0, 0, 0, .7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalCard = styled(Card)`
  padding: 0;
  background-color: rgb(${props => props.theme.background});
  max-width: 47%;
  min-width: 30%;
  overflow: hidden;

  @media screen and (max-width: 720px) {
    max-width: 94vw;
  }
`;

const ModalContent = styled.div`
  padding: 1rem;
`;

const ModalActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
`;

export const ModalButton = styled.button`
  outline: none;
  border: none;
  border-top: 1px solid rgb(${props => props.theme.cardBorder});
  background-color: transparent;
  text-align: center;
  width: 100%;
  padding: 1rem 0;
  color: rgb(${props => props.theme.secondaryText});
  background-color: transparent;
  font-weight: 600;
  font-size: .9rem;
  cursor: pointer;
  transition: all .23s ease-in-out;

  &:hover {
    background-color: rgba(${props => props.theme.cardBorder}, .35);
  }
`;

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => any;
  actions?: ReactNode;
}