import type { DisplayTheme } from "./Provider";
import "styled-components";

/// <reference types="vite/client" />

declare module "styled-components" {
  export interface DefaultTheme {
    displayTheme: DisplayTheme;
    theme: string;
    primaryText: string;
    secondaryText: string;
    background: string;
    cardBorder: string;
    cardBackground: string;
    backgroundv2: string;
    primary: string;
    primaryBtnHover: string;
    secondaryBtnHover: string;
    secondaryItemHover: string;
    buttonDisabled: string;
    primaryTextv2: string;
    secondaryTextv2: string;
    buttonDisabledText: string;
    inputField: string;
    success: string;
    fail: string;
    backgroundSecondary: string;
  }
}
