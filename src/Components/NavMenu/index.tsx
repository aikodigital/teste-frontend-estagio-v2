import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import * as S from './style'

const NavMenu: React.FC = () => {
  return (
    <S.StyledNavBar expand="lg">
        <Container fluid>
            <S.StyledNavbarBrand href="#home">React-Bootstrap</S.StyledNavbarBrand>
        </Container>
    </S.StyledNavBar>
  )
}

export default NavMenu;