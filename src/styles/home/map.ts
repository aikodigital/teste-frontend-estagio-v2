import styled from "styled-components";

export const Container = styled.div` 
    overflow: hidden;
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    
    h3{
        color:  ${({theme})=>theme.pallete.text.primary};
    }
    
    & > div{
        box-shadow: rgb(145 158 171 / 20%) 0px 3px 1px -2px, rgb(145 158 171 / 14%) 0px 2px 2px 0px, rgb(145 158 171 / 12%) 0px 1px 5px 0px;
        border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    }

    // REMOVE ICON LEAFLET
    .leaflet-bottom.leaflet-right{
        display: none;
    }

    // LG - 992px
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
        width: 500px;
        height: 710px;
    }
    // XL - 1200px
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.xl}) {
        width: 800px;
    }
`