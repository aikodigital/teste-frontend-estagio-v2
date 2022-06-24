import styled from "styled-components";

interface props{
    marginTop: string,
    marginBottom: string,
    marginRight: string,
}

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    max-height: 70vh;
`
export const StyledContainerMap = styled.div<props>`
    width: 100%;
    border: 3px solid rgb(81, 81, 222);
    margin-top: ${props=>props.marginTop};
    margin-bottom: ${props=>props.marginBottom};
    margin-right: ${props=>props.marginRight};
    margin-left: 2%;
    height: auto;
    display: flex;
    flex-direction: column;
`