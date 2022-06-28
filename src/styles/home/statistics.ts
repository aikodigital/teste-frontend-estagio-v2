import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    // MD
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) {
        flex-direction: row;
    }
    
    // LG
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
        gap: 50px;
    } 
`

export interface iStatistic {
    themeColor: string
}

export const Statistic = styled.div<iStatistic>`
    width: 100%;
    height: 80px;
    overflow: hidden;
    position: relative;
    border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 10%) 0px 16px 32px -4px; 

    // CHANGE COLOR
    ${({theme, themeColor})=>{
        function selectColor() {
            switch(themeColor){
                case 'red': 
                return theme.pallete.quaternary.main
                
                case 'orange': 
                return theme.pallete.primary.main
                
                case 'purple': 
                return theme.pallete.secondary.main
                
                case 'blue': 
                return theme.pallete.tertiary.main

                default: 
                return theme.pallete.quaternary.main
            }
        }
        return(css`
        background-color: ${lighten(0.10, selectColor())};
        `)
    }}

    span{
        position: relative;
        z-index: 1;
        font-size: 0.875rem;
        font-weight: ${({theme})=>theme.typography.fontWeightMedium};
        color: ${({theme})=>theme.pallete.common.white};
    }
    
    p{
        position: relative;
        z-index: 1;
        font-size: 1.5rem;
        font-weight: ${({theme})=>theme.typography.fontWeightMedium};
        color: ${({theme})=>theme.pallete.common.white};
    }

    svg{
        position: absolute;
        top: 0%;
        right: 0;
    } 
`