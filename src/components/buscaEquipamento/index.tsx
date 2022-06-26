import React from "react"
import { Link } from "react-router-dom"
import equipamentos from "../../data/equipment.json"
import styles from "./BuscaEquipamento.module.scss"

const BuscaEquipamento = () => {
	return (
		<div className={styles.equipaments}>
			<ul className={styles.equipaments__list}>
				{equipamentos.map((equipamento => (
					<li key={equipamento.id} className={styles.equipaments__item}>
						<Link to={`/equipamento/${equipamento.id}`} style={{"textDecoration": "none", "color": "#1f61dc"}}>
							{equipamento.name}
						</Link>
					</li>
				)))}
			</ul>
			<hr />
		</div>
	)
}

export default BuscaEquipamento