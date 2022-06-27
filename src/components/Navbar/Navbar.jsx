import './Navbar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const [mobileNavbar, setMobileNavbar] = useState(false)

    function setMobileNavbarFunc() {
        setMobileNavbar(!mobileNavbar)
    }

    const [pageUrl, setPageUrl] = useState('map')

    function setPageUrlFunc(str) {
        setPageUrl(str)
    }

    return (
        <div className='navbar'>
            <div className="navbar-wrap">
                <Link to='/' className='navbar-logo'>
                    <img src={require('../../img/aiko.png')} alt="Aiko Logo" />
                </Link>
                <span onClick={setMobileNavbarFunc} className={mobileNavbar ? "close-navbar active" : ''}></span>
                <ul onClick={setMobileNavbarFunc} className={mobileNavbar ? 'navbar-links active' : 'navbar-links'}>
                    <li onClick={e => setPageUrlFunc('map')}>
                        <Link to={'/'}>Mapa</Link>
                        <span className={pageUrl == 'map' ? 'on' : ''}></span>
                    </li>
                    <li onClick={e => setPageUrlFunc('states')}>
                        <Link to={'/states-history'}>Histórico de Estados</Link>
                        <span className={pageUrl == 'states' ? 'on' : ''}></span>
                    </li>
                    <li onClick={e => setPageUrlFunc('positions')}>
                        <Link to={'/positions-history'}>Histórico de Posições</Link>
                        <span className={pageUrl == 'positions' ? 'on' : ''}></span>
                    </li>
                </ul>
                <button onClick={setMobileNavbarFunc} className={mobileNavbar ? 'navbar-burger active' : 'navbar-burger'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    )
}

export default Navbar