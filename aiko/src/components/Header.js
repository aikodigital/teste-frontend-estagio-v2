import React from 'react';
import './HeaderStyle.css'
import { Link } from 'react-router-dom';
import aiko from '../img/aiko.png'

function Header() {
  return(
    <header data-testid="headerTest" id ="header">
      <img data-testid="companyLogo" src={aiko} alt="logo" id="aikoImg" style={{ height: '50px', width: '135px' }}/>
      <Link id="historyLink" to="/history">  <button className="buttonLink"> Acessar históricos dos equipamentos </button> </Link>
    </header>
  )
}


export default Header