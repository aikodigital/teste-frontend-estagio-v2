import { Container, Table } from "react-bootstrap";
import styled from "styled-components";
import { ColorState } from "../assets/helpers";

interface props{
    color: string
}

export const StyledContainer = styled(Container)`
    width: 42%;
    height: auto;
    overflow-y: auto;
    margin-bottom: 2%;
`

export const StyledTable = styled(Table)`
    width: 100%;
`

export const StyledH5 = styled.h5`
    text-align: center;
`

export const StyledTd = styled.td<props>`
    color: ${props => props.color} !important
`

