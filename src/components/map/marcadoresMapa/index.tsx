import { Marker, Popup } from "react-leaflet"
import React from "react"
import { Link } from "react-router-dom"
import { UseBuscarEstadoAtual, UseBuscarNomeEquipamento, UseBuscarNomeModelo, UseRetornarStatus } from "../../../hooks/useBuscarInformacoes"
import styles from "./LocalizacoesRecentes.module.scss"
import moment from "moment"
import { mudarIconeModelo } from "../../../utils/mudarIconeModelo"

interface IProps {
  localizacoesRecentes: (string | number )[][],
	historicoLocalizacoes: (string | number )[][]
}

const MarcadoresMapa = ({localizacoesRecentes, historicoLocalizacoes}: IProps) => {

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

	if(historicoLocalizacoes.length > 1) {
		return (
			<>
				{historicoLocalizacoes.map((local, index) => (
					<Marker key={index} position={[Number(local[2]), Number(local[3])]} icon={mudarIconeModelo(String(local[0]))}>
						<Popup className={styles.markers__popUp}>
							<div className={styles.markers__name}>
								{UseBuscarNomeEquipamento(String(local[0]))}
							</div  >
							<div className={styles.markers__model}>
								{UseBuscarNomeModelo(String(local[0]))}
							</div>
							<div className={styles.markers__date}>
								{moment(new Date(local[1])).format("DD/MM/YYYY")} 
								<div style={{"textAlign": "center"}}>
									{moment(new Date(local[1])).format("HH:mm")}
								</div>
							</div>
							<button 
								className={styles.markers__button}
								style={{"backgroundColor": "rgb(31, 97, 220)"}}
							>
								<Link to={`/equipamento/${String(local[0])}`} className={styles.markers__link}>
								Ver detalhes
								</Link>
							</button>
						</Popup>
					</Marker>
				))}
			</>
		) 
	} else {
		return (
			<>
				{localizacoesRecentes.map((local, index) => (
					<Marker key={index} position={[Number(local[1]), Number(local[2])]} icon={mudarIconeModelo(String(local[0]))}>
						<Popup className={styles.markers__popUp}>
							<div 
								className={styles.markers__status} 
								style={{backgroundColor: seeRef(UseBuscarEstadoAtual(String(local[0])))}}>
								<img 
									src={UseRetornarStatus(String(local[0]))} 
									alt="status do equipamento"
									className={styles.markers__image}
								/>
							</div>
							<div className={styles.markers__name}>
								{UseBuscarNomeEquipamento(String(local[0]))}
							</div  >
							<div className={styles.markers__model}>
								{UseBuscarNomeModelo(String(local[0]))}
							</div>
							<div 
								className={styles.markers__state}
							>
								{UseBuscarEstadoAtual(String(local[0]))}
							</div>
							<button 
								className={styles.markers__button} 
								style={{backgroundColor: seeRef(UseBuscarEstadoAtual(String(local[0])))}}
							>
								<Link to={`/equipamento/${String(local[0])}`} className={styles.markers__link}>
								Ver detalhes
								</Link>
							</button>
						</Popup>
					</Marker>
				))}
			</>
		)
	}
}

export default MarcadoresMapa