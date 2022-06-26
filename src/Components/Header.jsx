import React from 'react'
import styles from './Header.module.css'
import imgAiko from '../../img/aiko.png'

export const Header = () => {
  return (
    <section className={styles.section}>
      <header className={styles.sidebarHeader}>
      <img className={styles.logo} src={imgAiko} alt="logo Aiko" />
      </header>
    </section>
  )
}
