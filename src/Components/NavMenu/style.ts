import { Navbar } from "react-bootstrap";
import styled from "styled-components";

interface props{
    active: string;
}

export const StyledNavBar = styled(Navbar)<props>`
    background-color: white;
    border-bottom: 1px rgb(214 222 235) solid;
    position: fixed;
    width: 100%;
    z-index: 9999;
    transition: all 0.7s ease-in-out 0s;
    top: ${props => props.active};
`

export const StyledImg = styled.img`
    width: 100%;
    margin: auto;  
`

export const StyledA = styled.a`
    margin: auto;
    width: 8%;
    text-align: center;
    @media screen and (max-width: 768px) {
        width: 18%;
    }
`
