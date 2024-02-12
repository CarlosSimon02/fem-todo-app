import { createGlobalStyle, css } from 'styled-components';

import FONT_WEIGHTS from './constants/font-weights';
import pxToRem from './functions/pxToRem';

const Resets = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *:not(dialog) {
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;

const Base = css`
  .no-js body > *:not(noscript) {
    display: none;
  }

  .no-transition * {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
    transition: none !important;
  }

  noscript {
    color: red;
  }

  .sr-only {
    position: absolute !important;
    clip-path: inset(50%) !important;
    margin: -1px !important;
    border: 0 !important;
    padding: 0 !important;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
    white-space: nowrap !important;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    font-optical-sizing: auto;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    font-style: normal;
    z-index: -100;
    background-color: ${({ theme }) => theme.color.body.background};
    color: ${({ theme }) => theme.color.body.text};
  }

  //Added style to all focusable elements when using tab or keyboard selection
  *:focus-visible {
    outline: ${pxToRem(2)} solid ${({ theme }) => theme.color.accent.main};
  }

  * {
    transition:
      color ${({ theme }) => theme.transition.color.delay} ${({ theme }) => theme.transition.color.timingFunc},
      background-color ${({ theme }) => theme.transition.color.delay}
        ${({ theme }) => theme.transition.color.timingFunc},
      fill ${({ theme }) => theme.transition.color.delay} ${({ theme }) => theme.transition.color.timingFunc},
      stroke ${({ theme }) => theme.transition.color.delay} ${({ theme }) => theme.transition.color.timingFunc},
      box-shadow ${({ theme }) => theme.transition.color.delay} ${({ theme }) => theme.transition.color.timingFunc},
      border-color ${({ theme }) => theme.transition.color.delay} ${({ theme }) => theme.transition.color.timingFunc};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${Resets}
  ${Base}
`;

export default GlobalStyle;
