import React, { useState } from 'react';
import { Container} from 'react-bootstrap';
import hooks from '../assets/hooks';
import logo from '../assets/img/aiko-logo.png'
import * as S from './style'

const NavMenu: React.FC = () => {

  const {rolagem, scroll} = hooks()

  window.addEventListener('scroll',rolagem)
  
  return (
    <S.StyledNavBar expand="lg" active = {scroll}>
        <Container fluid>
          <S.StyledA href='https://aiko.digital' target='_blank' >
            <S.StyledImg src= {logo} />
          </S.StyledA>

        </Container>
    </S.StyledNavBar>
  )
}

export default NavMenu;