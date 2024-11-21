import { Provider, ARCONNECT_DARK_THEME, ARCONNECT_LIGHT_THEME } from "../src/Provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  (Story, context) => (
    <Provider theme={context.globals.theme === "dark" ? ARCONNECT_DARK_THEME : ARCONNECT_LIGHT_THEME}>
      <Story />
    </Provider>
  )
];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
      showName: true
    }
  }
};
