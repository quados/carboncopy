import { colorWithOpacity } from "helpers/utils"
import { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Space Mono", "Roboto", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  button, textarea, input {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
}

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
  }

  /* Fix white scrollbar bug that sometimes appears*/
  &::-webkit-scrollbar {
    display: none;
  }
  * {
    scrollbar-width: none;
  }
`

export const fancyScrollbar = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    display: block;
  }
  &::-webkit-scrollbar-button {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.activeElementBackground};
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.activeElementBackground};
  }
  &::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.color.activeElementBackground};
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.activeElement};
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-track:hover {
    background: ${({ theme }) => theme.color.activeElement};
  }
  &::-webkit-scrollbar-track:active {
    background: ${({ theme }) => theme.color.activeElement};
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export const darkModeTheme = {
  color: {
    background: "#0D0D0D",
    textHigh: colorWithOpacity("#FFFFFF", 0.87),
    textMedium: colorWithOpacity("#FFFFFF", 0.6),
    textLow: colorWithOpacity("#FFFFFF", 0.54),
    textDisabled: colorWithOpacity("#FFFFFF", 0.38),
    activeElement: "#6C808C",
    activeElementBackground: "#262626",
    accentColor: "#556573",
    error: "#f50d94"
  }
}

//https://github.com/styled-components/styled-components/issues/1589#issuecomment-456641381
type ThemeInterface = typeof darkModeTheme

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
