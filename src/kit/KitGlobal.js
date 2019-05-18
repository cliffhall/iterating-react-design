import { createGlobalStyle } from "styled-components";

export const KitGlobal = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Orbitron:500|Nunito:600|Alegreya+Sans+SC:700');
    background-color: ${props => props.theme.foreground};
    overflow-x: hidden;
  }
`;
