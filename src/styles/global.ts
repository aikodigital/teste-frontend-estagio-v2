import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  #root {
    --background: #F0F2F5;

    --shape: #FFFFFF;    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
  
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 99999;
  }

  .react-modal-content {
    width: 100%;
    max-width: 1000px;
    background: #eee;
    padding: 1.5rem;
    position: relative;
    border-radius: 0.25rem;
    margin: 0 1rem
  }

  .react-modal-close {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
` 