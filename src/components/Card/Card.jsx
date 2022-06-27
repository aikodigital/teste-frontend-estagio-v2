import { Link } from 'react-router-dom'
import styles from './Card.module.css'

const Card = ({ title, description, link, imgUrl }) => {
    return (
        <Link to={link}>
            <div id="card" className={`${styles.card} upscaleHover`}>
                <img src={imgUrl} alt={title}/>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default Card