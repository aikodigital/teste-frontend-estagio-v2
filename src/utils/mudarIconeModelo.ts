import L from "leaflet"
import { UseBuscarNomeModelo } from "../hooks/useBuscarInformacoes"

export const mudarIconeModelo = (equipamentoId: string) => {

	const nomeModelo = UseBuscarNomeModelo(equipamentoId)
	console.log(nomeModelo)

	switch (nomeModelo) {
	case "Caminhão de carga":
		console.log("ola")
		return new L.Icon({
			iconUrl: require("../assets/delivery.png"),
			iconSize: [50, 50],
			iconAnchor: [22, 94],
			popupAnchor: [-3, -76],
			shadowAnchor: [22, 94]
		})
	case "Harvester":
		return new L.Icon({
			iconUrl: require("../assets/harvest.png"),
			iconSize: [50, 50],
			iconAnchor: [22, 94],
			popupAnchor: [-3, -76],
			shadowAnchor: [22, 94]
		})
	case "Garra traçadora":
		return new L.Icon({
			iconUrl: require("../assets/excavator.png"),
			iconSize: [50, 50],
			iconAnchor: [22, 94],
			popupAnchor: [-3, -76],
			shadowAnchor: [22, 94]
		})
	}
}