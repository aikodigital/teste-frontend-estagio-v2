import styled from "styled-components"

// PROFILE
export const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: grid;
    gap: 20px;
    background-color: ${({theme})=>theme.pallete.background.default};
    border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 10%) 0px 16px 32px -4px;

    // IMAGE
    & > div { 
        display: block;
        width: 100%;
        max-width: 360px;
        overflow: hidden;
        margin: 0 auto;

        span {
            img { 
                user-select: none; 
                -webkit-user-drag: none;
            }
            width: 100%; 
            z-index: 1;
        }
    }
    // INFO
    & > span {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 10px;
        h1{
            font-weight: 400;
            font-size: 0.75rem;
            text-transform: uppercase;
            color: ${({theme})=>theme.pallete.text.secondary};
        }
        p{
            font-size: 1rem;
        }
    }


// SM - 576px
@media screen and (min-width: ${({theme})=>theme.breakpoints.value.sm}) {
max-height: 280px;
display: flex;

    // IMAGE
    & > div {
        margin: initial;
        max-width: 360px;
        overflow: hidden;
    }
} 
` 