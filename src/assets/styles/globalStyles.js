import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
        overflow-x: hidden;
        font-family: 'Patrick Hand SC', cursive;
    }

    body {
        min-height: 100vh;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }
    img {
        max-width: 100%;
        display: block;
    }    
    a {
        text-decoration: none;
        color: #ddaa34;
    }
`;

export default GlobalStyle