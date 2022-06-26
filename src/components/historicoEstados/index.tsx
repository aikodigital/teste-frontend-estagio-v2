import React, { useState } from "react"
import styles from "./HistoricoEstados.module.scss"
import historicoEstados from "../../data/equipmentStateHistory.json"
import {UseBuscarNomeEquipamento, UseBuscarNomeModelo, UseBuscarTodosOsEstados } from "../../hooks/useBuscarInformacoes"
import { useParams } from "react-router-dom"
import moment from "moment"

const HistoricoEstados = () => {

	const params = useParams()

	const listaFiltros = ["padrao", "0808344c-454b-4c36-89e8-d7687e692d57", "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f", "baff9783-84e8-4e01-874b-6fd743b875ad"]
	const [filtro, setFiltro] = useState<string>("padrao")
	const [filtroData, setFiltroData] = useState<boolean>(false)


	const mudarFiltroEstado = () => {
		switch (filtro) {
		case "padrao":
			setFiltro(listaFiltros[1]) // filtrar por operando
			break
		case "0808344c-454b-4c36-89e8-d7687e692d57": // filtrar por manutencao
			setFiltro(listaFiltros[2])
			break
		case "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f": // filtrar por parado
			setFiltro(listaFiltros[3])
			break
		case "baff9783-84e8-4e01-874b-6fd743b875ad": // sem filtro
			setFiltro(listaFiltros[0])
			break
		default:
			break
		}
	}

	const seeRef = (statusEquipamento: string) => {		
		switch (statusEquipamento) {
		case "Operando":
			return "#2dd784"
		case "Manutenção":
			return "#f08542"
		case "Parado":
			return "#e34c5e"
		default:
			break
		}
	}

	return (
		<div className={styles.table}>
			<div className={styles.table__column}>
				<ul className={styles.table__columnNames}>
					<li className={styles.table__columnName}>Nome</li>
					<li className={styles.table__columnName}>Modelo</li>
					<li 
						onClick={mudarFiltroEstado} 
						className={styles.table__columnName} 
						style={{cursor: "pointer", "color": "rgb(31, 97, 220)"}}
					>
						Estado
					</li>
					<li 
						className={styles.table__columnName}
						style={{cursor: "pointer", "color": "rgb(31, 97, 220)"}}
						onClick={() => setFiltroData(!filtroData)}
					>
						Data
					</li>
					<li className={styles.table__columnName}>Hora</li>
				</ul>
			</div>
			<div className={styles.table__items} style={{"flexDirection": filtroData ? "column-reverse" : "column"}}>
				{historicoEstados.map(equipamento => {
					if(equipamento.equipmentId === params.id)
						return (equipamento.states.map((estados) => {
							if(filtro === "padrao" || estados.equipmentStateId === filtro)
								return (
									<ul className={styles.table__itemsList} key={estados.date}>
										<li className={styles.table__item}>{UseBuscarNomeEquipamento(equipamento.equipmentId)}</li>
										<li className={styles.table__item}>{UseBuscarNomeModelo(equipamento.equipmentId)}</li>
										<li className={styles.table__item}>
											<p 
												className={styles.table__state}
												style={{backgroundColor: seeRef(UseBuscarTodosOsEstados(estados.equipmentStateId))}}
											>
												{UseBuscarTodosOsEstados(estados.equipmentStateId)}	
											</p>
										</li>
										<li className={styles.table__item}>{moment(estados.date).format("DD/MM/YYYY")}</li>
										<li className={styles.table__item}>{moment(estados.date).format("HH:mm")}</li>
									</ul>
								)
						}))	
				})}			
			</div>
		</div>
	)
}

export default HistoricoEstados
