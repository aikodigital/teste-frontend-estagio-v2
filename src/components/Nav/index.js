import React from 'react';
import './style.css';
import aikoLogo from '../../assets/img/aiko.png';
import { ReactComponent as GitHub } from '../../assets/img/github-white.svg';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src={aikoLogo} alt="" className='logo'/>
                <a href="https://github.com/tiagow8/teste-frontend-estagio-v2"><GitHub className='me-2'/><span>Este projeto no GitHub.</span></a>
            </div>
        </nav>
    );
}

export default Nav;