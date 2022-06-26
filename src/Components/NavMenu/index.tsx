import React from 'react';
import { Container} from 'react-bootstrap';
import logo from '../assets/img/aiko-logo.png'
import * as S from './style'

const NavMenu: React.FC = () => {
  return (
    <S.StyledNavBar expand="lg">
        <Container fluid>
          <S.StyledA href='https://aiko.digital' target='_blank' >
            <S.StyledImg src= {logo} />
          </S.StyledA>

        </Container>
    </S.StyledNavBar>
  )
}

export default NavMenu;