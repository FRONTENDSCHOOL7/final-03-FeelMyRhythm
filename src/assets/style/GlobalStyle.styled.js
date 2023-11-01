import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: 'Orbit-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/Orbit-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

* {
  box-sizing: border-box;
  font-family: 'Orbit-Regular';
}

body {
  line-height: normal;
  font-family: 'Orbit-Regular';
  background-color: white;
}

button {
  cursor: pointer;
}
`;
