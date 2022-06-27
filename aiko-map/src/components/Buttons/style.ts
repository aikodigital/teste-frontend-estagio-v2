import styled, { css } from "styled-components";


export const Content = styled.button`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none; 
    background: #083070;
    border-radius: 4px;
    font-size: medium;
    height: 20px;
    margin-top: 2px;
    padding: 20px;
    text-decoration: none;
    transition: all 0.4s ease;
    
    

    &:hover{
        color: var(--blue);
        background-color: #fff;
    }

    &.Btn-volta{
        margin-top: 20px;
    }

`;