import styled from "styled-components"

 
// WRAPPER PROFILE AND MAP
export const WrapperProfileAndMap = styled.div`
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

// LG
@media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
}
// XL
@media screen and (min-width: ${({theme})=>theme.breakpoints.value.xl}) {
    max-height: 440px;
}
`

// CONTAINER MAP
export const ContainerMap = styled.div`
    width: 100%; 
    height: 400px;
    background-color: ${({theme})=>theme.pallete.background.default};
    border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    overflow: hidden;
    display: grid;
    place-items: center;
    box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 10%) 0px 16px 32px -4px;

    // REMOVE ICON LEAFLET
    .leaflet-bottom.leaflet-right{
        display: none;
    }
// XL
@media screen and (min-width: ${({theme})=>theme.breakpoints.value.xl}) {
    height: 440px;
}
`

// CONTAINER PROFILE AND STATISCS
export const ContainerProfileAndStatistics = styled.div`
    width: 100%;
    display: grid;
    gap: 20px;

// LG - 992px
@media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
    max-width: 500px;
}
`

// CONTAINER DATE AND STATISTICS
export const ContainerDateAndStatistics = styled.div`
    display: flex;
    flex-direction: column;
`

// DATE
export const SelectedDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 18%) 0px 16px 32px -4px; 
    padding: 15px;
    border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    
    input{
        font-size: 1rem;
        color: ${({theme})=>theme.pallete.text.secondary};
    }
`

// TABLE
export const Table = styled.div`
    height: 360px;
    width: 100%;
    margin-bottom: 50px;
`
