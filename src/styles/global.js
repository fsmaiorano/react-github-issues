import { injectGlobal } from 'styled-components';

injectGlobal`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body {
    justify-content: space-between;
    text-align: center;
    font-family: sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiase !important;
}

`;
