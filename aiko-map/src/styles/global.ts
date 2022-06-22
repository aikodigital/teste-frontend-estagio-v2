import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #282c34;
       
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background: var(--background);
        position: relative;
        min-height: 100%;
        width:100%;
    }

    button{
        &:hover{
            cursor: pointer;
        }
    }

`;