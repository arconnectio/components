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
      } as ThemeProps}>
        {children}
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle<{ dark: boolean; }>`
  body {
    background-color: ${props => props.dark ? "#000" : "#fff"};
    color: ${props => props.dark ? "#fff" : "#000"};
  }
`;

export type DisplayTheme = "dark" | "light";

export interface ThemeProps {
  theme: string;
  primaryText: string;
  secondaryText: string;
  background: string;
  cardBorder: string;
}
