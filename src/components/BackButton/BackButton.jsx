import { useNavigate } from "react-router-dom"
import styles from './BackButton.module.css'

const BackButton = ({to = "/"}) => {
    const navigate = useNavigate()

    return <button className={`btn bg-success text-light sticky-top upscaleHover ${styles.backButton}`} onClick={() => navigate(to)}>❮</button>
}

export default BackButton