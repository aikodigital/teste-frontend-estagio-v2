import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import React from "react"
import { Link } from "react-router-dom"
import { UseBuscarEstadoAtual, UseRetornarStatus, UseBuscarNomeEquipamento, UseBuscarNomeModelo } from "../../hooks/useBuscarInformacoes"
import styles from "../map/Map.module.css"
import "../map/Map.css"
import localizacoes from "../../data/equipmentPositionHistory.json"

const LocalizacoesEquipamentos = () => {

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
		<MapContainer center={[-19.126536, -45.947756]} zoom={12} scrollWheelZoom={false} className={styles.leaflet}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{localizacoes.map((local, index) => (
				<Marker key={index} position={[local.positions[0].lat, local.positions[0].lon]}>
					<Popup className={styles.leaflet__popUp}>
						<div 
							className={styles.leaflet__status} 
							style={{backgroundColor: seeRef(UseBuscarEstadoAtual(local.equipmentId))}}
						>
							<img 
								src={UseRetornarStatus(local.equipmentId)} 
								alt="status do equipamento"
								className={styles.leaflet__image}
							/>
						</div>
						<div className={styles.leaflet__name}>
							{UseBuscarNomeEquipamento(local.equipmentId)}
						</div  >
						<div className={styles.leaflet__model}>
							{UseBuscarNomeModelo(local.equipmentId)}
						</div>
						<div 
							className={styles.leaflet__state}
						>
							{UseBuscarEstadoAtual(local.equipmentId)}
						</div>
						<button 
							className={styles.leaflet__button} 
							style={{backgroundColor: seeRef(UseBuscarEstadoAtual(local.equipmentId))}}
						>
							<Link to={`/equipamento/${local.equipmentId}`} className={styles.leaflet__link}>
								Ver detalhes
							</Link>
						</button>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	)
}

export default LocalizacoesEquipamentos

function useBuscarUltimaLocalizacaoEquipamentos() {
	throw new Error("Function not implemented.")
}
