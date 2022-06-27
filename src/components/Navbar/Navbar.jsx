import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={`navbar navbar-dark ${styles.navbar}`}>
                <Link to="/"><h3 className="upscaleHover">Home</h3></Link>
        </nav>
    )
}

export default Navbar