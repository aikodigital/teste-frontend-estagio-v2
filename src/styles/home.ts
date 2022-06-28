import styled from 'styled-components'

export const ContainerMapAndTable = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 40px;
    width: 100%;

    // LG - 992px
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
        flex-direction: row;
        height: 720px;
    }
`



export const ContainerDateAndTable = styled.div`
    display: grid;
    gap: 40px;
    width: 100%;
`



