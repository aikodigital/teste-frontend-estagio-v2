import React from "react"
import styles from "./Header.module.scss"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to={"/"}>
				<img src={logo} alt="Logo da empresa" className={styles.header__logo} />
			</Link>
		</header>
	)
}

export default Header