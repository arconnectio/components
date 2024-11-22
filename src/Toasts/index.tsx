
import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { ToastDataWithID, useToasts } from "../Toast/utils";
import styled from "styled-components";
import { Toast } from "../Toast";


interface ToastsProps {
  setToasts: Dispatch<SetStateAction<ToastDataWithID[]>>;
}

export const Toasts = ({ setToasts }: ToastsProps) => {
  const { toasts } = useToasts();

  return (
    <ToastsWrapper>
      <AnimatePresence>
        {toasts.map((toast, i) => (
          <Toast
            action={toast.action}
            duration={toast.duration}
            type={toast.type}
            close={(id) => {
              setToasts((val) => val.filter((t) => t.id !== id));
            }}
            addedAt={toast.addedAt}
            key={i}
          >
            {toast.content}
          </Toast>
        ))}
      </AnimatePresence>
    </ToastsWrapper>
  );
};

const ToastsWrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  bottom: 1rem;
  right: 1rem;
  max-width: calc(100% - 2rem);
  width: 420px;
  z-index: 10000;
`;

