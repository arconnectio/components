import type { DisplayTheme } from "~Provider"
import "styled-components";

/// <reference types="react-scripts" />

declare module "styled-components" {
  export interface DefaultTheme {
    displayTheme: DisplayTheme;
    theme: string;
    primaryText: string;
    secondaryText: string;
    background: string;
    cardBorder: string;
    cardBackground: string;
  }
}