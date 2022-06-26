import React from "react"
import { Link, useParams } from "react-router-dom"
import { UseHorasTotaisDeUmEstado, UseHorasTotaisTrabalhadas } from "../../hooks/useBuscarInformacoes"
import { UseGanhosPorHorasEquipamento } from "../../utils/ganhorPorHorasEquipamento"
import styles from "./DadosEquipamento.module.scss"

const DadosEquipamento = () => {

	const params = useParams()

	const tempoGasto: number = UseHorasTotaisTrabalhadas(params.id)
	const tempoOperando: number = UseHorasTotaisDeUmEstado(params.id, "0808344c-454b-4c36-89e8-d7687e692d57")
	const tempoEmManutencao: number = UseHorasTotaisDeUmEstado(params.id, "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f")

	const percentualDeProdutividade = (tempoGasto: number, tempoOperando: number) => {

		const percentualDeProdutividade = tempoOperando / tempoGasto * 100 

		return percentualDeProdutividade.toFixed(2)
	}

	const ganhoPorEquipamento = (tempoOperando: number, tempoEmManutencao: number) => {

		const ganhoPorHoras = UseGanhosPorHorasEquipamento(params.id)

		const porHoraDeOperancao = tempoOperando * ganhoPorHoras[0] 
		const porHoraEmManutencao = tempoEmManutencao * ganhoPorHoras[1] 
		const ganhoPorEquipamento = porHoraDeOperancao + porHoraEmManutencao

		return ganhoPorEquipamento.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
	}

	return (
		<div className={styles.datas}>
			<div className={styles.datas__data}>
				<div style={{"textAlign": "center", "height": "20%"}}>
					<p style={{"fontSize": "32px"}}>Percentual de Produção</p>
				</div>
				<div className={styles.datas__results}>
					<div className={styles.datas__info}>
						<p>Tempo gasto {tempoGasto} horas</p>
						<p>Tempo operando {tempoOperando} horas</p>
					</div>
					<div className={styles.datas__production}>
						<h1>{percentualDeProdutividade(tempoGasto,tempoOperando)}% de Produtividade</h1>
					</div>
				</div>		
			</div>
			<div className={styles.datas__data}>
				<div style={{"textAlign": "center", "height": "20%"}}>
					<p style={{"fontSize": "32px"}}>Ganho por equipamento</p>
				</div>
				<div className={styles.datas__results}>
					<div className={styles.datas__info}>
						<p>Tempo operando {tempoOperando} horas</p>
						<p>Em manutenção {tempoEmManutencao} por horas</p>
					</div>
					<div className={styles.datas__production}>
						<h1>Gerou por hora R$ {ganhoPorEquipamento(tempoOperando,tempoEmManutencao)}</h1>
					</div>
				</div>		
			</div>
			<div className={styles.datas__data}>
				<div style={{"textAlign": "center", "height": "20%"}}>
					<p style={{"fontSize": "32px"}}>Historico de Rotas</p>
				</div>
				<div className={styles.datas__map}>
					<div className={styles.datas__mapInfo}>
						<p style={{"textAlign": "center"}}>Rotas realizadas pelo equipamento</p>
						<Link to={`/equipamento/${params.id}/historico`} style={{"textDecoration": "none"}}>
							<p 
								style={{"textAlign": "center", "cursor": "pointer", "color": "rgb(31, 97, 220)"}}
							>
							Ver mapa
							</p>
						</Link>
					</div>
				</div>		
			</div>
		</div>
	)
}

export default DadosEquipamento