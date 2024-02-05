import { createGlobalStyle, css } from 'styled-components';

import FONT_WEIGHTS from './constants/font-weights';

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

  noscript {
    color: red;
  }

  body {
    background-color: ${({ theme }) => theme.color.body.background};
    color: ${({ theme }) => theme.color.body.text};
    font-family: 'Josefin Sans', sans-serif;
    font-optical-sizing: auto;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    font-style: normal;
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
`;

const GlobalStyle = createGlobalStyle`
  ${Resets}
  ${Base}
`;

export default GlobalStyle;
