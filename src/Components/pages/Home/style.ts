import styled from "styled-components";

interface props{
    marginTop: number,
    marginBottom: number,
    marginRight: number,
}

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    max-height: 80vh;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: auto;
    }
`
export const StyledContainerMap = styled.div<props>`
    width: 100%;
    border: 3px solid rgb(81, 81, 222);
    border-radius: 20px;
    margin-top: ${props=>props.marginTop}%;
    margin-bottom: ${props=>props.marginBottom}%;
    margin-right: ${props=>props.marginRight}%;
    margin-left: 2%;
    height: auto;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        max-height: 300px;
        max-width: 96%;
        margin-top: ${props=>props.marginTop*2.5}%;
    }
`