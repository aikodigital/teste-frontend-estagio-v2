import styled, { css } from "styled-components";

interface Ititulo{
    sub: boolean
}
export const Titulo = styled.p`
    color: #fff;
    height:20px;
    display: flex;
    width:100%;
    padding: 20px 10px;
    font-size: xx-large;
    align-items: center;
    font-weight: 500;

    ${(props: Ititulo)=>
        props.sub &&
            css` 
                font-size: large;
            `    
    };
`;

export const Texto = styled.p`

    color: #fff;
    height:20px;
    display: flex;
    width:100%;
    padding: 20px 10px;
    font-size: large;
    align-items: center;
    font-weight: 300;
`;