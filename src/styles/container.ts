import styled from "styled-components"

export const ContainerMain = styled.div`

    margin: 0 auto;
    padding: 0 10px;
    width: 100%;

    // SM - 576px
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.sm}) {
        max-width: ${({theme})=>theme.screen.maxWidth.sm};
    }

    // MD - 768px
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) {
        max-width: ${({theme})=>theme.screen.maxWidth.md};
    }
    
    // LG - 992px
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
        max-width: ${({theme})=>theme.screen.maxWidth.lg};
    }
    
    // XL - 1200px
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.xl}) {
        max-width: ${({theme})=>theme.screen.maxWidth.xl};
    }
    
    // XXL - 1400px
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.xxl}) {
        max-width: ${({theme})=>theme.screen.maxWidth.xxl};
    }
`