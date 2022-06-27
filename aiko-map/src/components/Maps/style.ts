import styled, { css } from "styled-components";

interface Isidebar{
    sidebarOp: boolean
}

export const Content = styled.div`
    height: 100vh;
    float: right;
    width: calc(100% - 78px);
    
    ${(props: Isidebar)=>
        props.sidebarOp &&
            css` 
            width: calc(100% - 278px)
            `    
    };

    transition: width .2s ease-out;
`;