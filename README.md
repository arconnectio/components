ArConnect Components Library
============================


Setup
-----

This project does not include a CSS reset or global default styles.

Depending on your setup, the best way to provide those would vary, but in general the best option is to do it using a
plain CSS file. Avoid using `styled-components`'s `createGlobalStyle()` as it might result in the following error and
unexpected results:

> Please do not use `@import` CSS syntax in `createGlobalStyle` at this time, as the CSSOM APIs we use in production do
> not handle it well. Instead, we recommend using a library such as `react-helmet` to inject a typical `<link>` meta tag
> to the stylesheet, or simply embedding it manually in your `index.html` `<head>` section for a simpler app.

You can find some simple global styles / CSS reset in this repo, at:

- `.storybook/preview-head.html`

Additionally, you can find a more complex example in https://github.com/arconnectio/ArConnect/:

- `ArConnect/src/popup.html`
- `ArConnect/assets/popup.css`
- `ArConnect/src/components/hardware/HardwareWalletTheme.tsx`
