import Card from "../../components/Card/Card"
import styles from './HomePage.module.css'

import equipmentImg from '../../assets/images/equipment.png'

function HomePage() {
    return (
        <>
            <h1>Bem Vindo!</h1>
            <p className="lead">Este site detalha informações dos equipamentos utilizados em operações florestais.</p>
            <div className={styles.cardsWrapper}>
                <hr className="my-4"></hr>
                <Card title="Equipamentos" description={"Lista de equipamentos"} link="/equipments" imgUrl={equipmentImg} />
            </div>
        </>
    )
}

export default HomePage