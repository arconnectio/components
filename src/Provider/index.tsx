import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { ToastData, ToastDataWithID, ToastsContext, useToasts } from "../Toast/utils";
import { AnimatePresence } from "framer-motion";
import { Toast } from "../Toast";
import { nanoid } from "nanoid";

export function Provider({
  children,
  theme = "light"
}: PropsWithChildren<{ theme?: DisplayTheme }>) {
  const [toasts, setToasts] = useState<ToastDataWithID[]>([]);

  function setToast(toast: ToastData) {
    const id = nanoid();

    setToasts(val => [...val, { ...toast, id, addedAt: new Date().getTime() }]);
    setTimeout(() => setToasts(val => val.filter((t) => t.id !== id)), toast.duration);
  }

  return (
    <>
      <GlobalStyle dark={theme === "dark"} />
      <ThemeProvider theme={{
        theme: "171, 154, 255",
        primaryText: "0, 0, 0",
        secondaryText: "174, 173, 205",
        cardBorder: "235, 235, 241",
        background: "255, 255, 255"
      }}>
        <ToastsContext.Provider value={{ toasts, setToast }}>
          <Toasts theme={theme} setToasts={setToasts} />
          {children}
        </ToastsContext.Provider>
      </ThemeProvider>
    </>
  );
}

const Toasts = ({ setToasts, theme }: ToastsProps) => {
  const { toasts } = useToasts();

  return (
    <ToastsWrapper>
      <AnimatePresence>
        {toasts.map((toast, i) => (
          <Toast
            action={toast.action}
            duration={toast.duration}
            type={toast.type}
            displayTheme={theme}
            close={(id) => {
              setToasts(val => val.filter((t) => t.id !== id))
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

const GlobalStyle = createGlobalStyle<{ dark: boolean; }>`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

  body {
    background-color: ${props => props.dark ? "#000" : "#fff"};
    color: ${props => props.dark ? "#fff" : "#000"};
    font-family: 'Manrope VF', 'Manrope', sans-serif;
    letter-spacing: .5px;
  }

  input, textarea, button, select {
    font-family: 'Manrope VF', 'Manrope', sans-serif;
    letter-spacing: .5px;
  }
`;

const ToastsWrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  gap: 1rem;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 10000;
`;

export type DisplayTheme = "dark" | "light";

interface ToastsProps {
  setToasts: Dispatch<SetStateAction<ToastDataWithID[]>>;
  theme: DisplayTheme;
}
