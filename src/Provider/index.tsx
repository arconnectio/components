import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import styled, {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider
} from "styled-components";
import {
  ToastData,
  ToastDataWithID,
  ToastsContext,
  useToasts
} from "../Toast/utils";
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

    setToasts((val) => [
      ...val,
      { ...toast, id, addedAt: new Date().getTime() }
    ]);
    setTimeout(
      () => setToasts((val) => val.filter((t) => t.id !== id)),
      toast.duration
    );
  }

  const lightTheme: DefaultTheme = {
    displayTheme: "light",
    theme: "171, 154, 255",
    primaryText: "0, 0, 0",
    secondaryText: "174, 173, 205",
    cardBorder: "235, 235, 241",
    background: "255, 255, 255",
    cardBackground: "255, 255, 255",
    // New styles:
    backgroundv2: "#FFFFFF",
    primary: "#7866D3",
    primaryBtnHover: "#5647A0",
    secondaryBtnHover: "#DDD9F4",
    secondaryItemHover: "#EBE8F8",
    buttonDisabled: "#BCB3E9",
    primaryTextv2: "#191919",
    secondaryTextv2: "#757575",
    buttonDisabledText: "#DDD9F4",
    inputField: "#757575",
    success: "#17A815",
    fail: "#EB0000",
    backgroundSecondary: "#CCCCCC",
    delete: "#F58080",
    secondaryDelete: "#F58080"
  };
  const darkTheme: DefaultTheme = {
    displayTheme: "dark",
    theme: "171, 154, 255",
    primaryText: "255, 255, 255",
    secondaryText: "174, 173, 205",
    cardBorder: "44, 44, 47",
    background: "0, 0, 0",
    cardBackground: "22, 22, 22",
    // New styles:
    backgroundv2: "#191919",
    primary: "#8E7BEA",
    primaryBtnHover: "#6751D0",
    secondaryBtnHover: "#36324D",
    secondaryItemHover: "#2B2838",
    buttonDisabled: "#544A81",
    primaryTextv2: "#FFFFFF",
    secondaryTextv2: "#A3A3A3",
    buttonDisabledText: "#A9A4C0",
    inputField: "#847F90",
    success: "#14D110",
    fail: "#FF1A1A",
    backgroundSecondary: "#333333",
    delete: "#8C1A1A",
    secondaryDelete: "#C51A1A"
  };

  return (
    <>
      <GlobalStyle dark={theme === "dark"} />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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

const GlobalStyle = createGlobalStyle<{ dark: boolean }>`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

  body {
    background-color: ${(props) => (props.dark ? "#000" : "#fff")};
    color: ${(props) => (props.dark ? "#fff" : "#000")};
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
  align-items: flex-end;
  gap: 1rem;
  bottom: 1rem;
  right: 1rem;
  max-width: calc(100% - 2rem);
  width: 420px;
  z-index: 10000;
`;

export type DisplayTheme = "dark" | "light";

interface ToastsProps {
  setToasts: Dispatch<SetStateAction<ToastDataWithID[]>>;
  theme: DisplayTheme;
}
