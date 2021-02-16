import GlobalStyles from '../src/styles/global';
import {ThemeProvider} from "styled-components";
import theme from "../src/styles/theme";
import {addDecorator} from "@storybook/react";
import {withNextRouter} from "storybook-addon-next-router";

addDecorator(withNextRouter)

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
