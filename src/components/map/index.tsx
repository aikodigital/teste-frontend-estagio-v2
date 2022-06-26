import { MapContainer, TileLayer } from "react-leaflet"
import React from "react"
import styles from "./Map.module.scss"
import { useBuscarHistoricoRotasEquipamento, useBuscarUltimaLocalizacaoEquipamentos } from "../../hooks/useBuscarInformacoes"
import "./Map.css"
import LocalizacoesRecentes from "./marcadoresMapa"
import { useParams } from "react-router-dom"

const Mapa = () => {

	const params = useParams()

	const localizacoesRecentes = useBuscarUltimaLocalizacaoEquipamentos()
	const historicoLocalizacoes = useBuscarHistoricoRotasEquipamento(params.id)

	return (
		<MapContainer center={[-19.126536, -45.947756]} zoom={12} scrollWheelZoom={true} className={styles.leaflet}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<div>
				<LocalizacoesRecentes localizacoesRecentes={localizacoesRecentes} historicoLocalizacoes={historicoLocalizacoes}/>
			</div>
		</MapContainer>
	)
}

export default Mapa

