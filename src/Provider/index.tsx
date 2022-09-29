import { PropsWithChildren } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components"

export function Provider({
  children,
  theme = "light"
}: PropsWithChildren<{ theme?: DisplayTheme }>) {
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
        {children}
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle<{ dark: boolean; }>`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

  body {
    background-color: ${props => props.dark ? "#000" : "#fff"};
    color: ${props => props.dark ? "#fff" : "#000"};
    font-family: 'Manrope', sans-serif;
  }

  input, textarea, button, select {
    font-family: 'Manrope', sans-serif;
  }
`;

export type DisplayTheme = "dark" | "light";
