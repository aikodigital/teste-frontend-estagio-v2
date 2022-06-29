import React from 'react'
import Style from './Header.module.css'

const Header = () => {
  return (
    <header className={Style.header}>
      <h1 className={Style.h1_header}>Aiko</h1>
    </header>
  )
}

export default Header