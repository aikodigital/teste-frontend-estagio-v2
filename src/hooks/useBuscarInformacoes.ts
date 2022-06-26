import equipamentos from "../data/equipment.json"
import modelos from "../data/equipmentModel.json"
import estados from "../data/equipmentState.json"
import historicoEstados from "../data/equipmentStateHistory.json"
import historicoPosicoes from "../data/equipmentPositionHistory.json"
import operando from "../assets/operando.png"
import parado from "../assets/parado.svg"
import manutencao from "../assets/manutencao.png"
import { converterEmHoras, converterEmHorasArray } from "../utils/converterEmHoras"

export const UseBuscarNomeEquipamento = (equipamentoId: string | undefined) => {

	let nomeEquipamento = ""
	
	equipamentos.map((equipamento: { id: string; name: string }) => 
		equipamento.id === equipamentoId ? nomeEquipamento = equipamento.name : "")
	return nomeEquipamento
}

export const UseBuscarNomeModelo = (equipamentoId: string | undefined) => {

	let nomeModelo = ""
	let IdModelo = ""

	equipamentos.find((equipamento: { id: string, equipmentModelId: string}) => 
		equipamento.id === equipamentoId ? IdModelo = equipamento.equipmentModelId : "")

	modelos.find((modelo) => 
		modelo.id === IdModelo ? nomeModelo = modelo.name : "")

	return nomeModelo
}

export const UseBuscarEstadoAtual = (equipamentoId: string) => {

	let idEstado = ""
	let nomeEstado= ""

	historicoEstados.find((estado) => {
		if(estado.equipmentId === equipamentoId) {
			estado.states.reverse()
			idEstado = estado.states[0].equipmentStateId
			estado.states.reverse()
		}
	})
	
	estados.find((estadoNome) => 
		estadoNome.id === idEstado ? nomeEstado = estadoNome.name : ""
	)

	return nomeEstado
}

export const useBuscarUltimaLocalizacaoEquipamentos = () => {
	
	const coordenadasValores: {equipamentoId: string, latitude: number, longitude: number} = {
		equipamentoId: "",
		latitude: 0,
		longitude: 0
	}

	const coordenadas: (string|number)[][] = [[]]	

	for (let index = 0; index < historicoPosicoes.length; index++) {

		const equipamentoId = historicoPosicoes[index].equipmentId
		const latitude = historicoPosicoes[index].positions[0].lat
		const longitude = historicoPosicoes[index].positions[0].lon

		coordenadasValores.equipamentoId = equipamentoId
		coordenadasValores.latitude = latitude
		coordenadasValores.longitude = longitude

		coordenadas.push([
			coordenadasValores.equipamentoId,
			coordenadasValores.latitude, 
			coordenadasValores.longitude
		])
	}

	coordenadas.shift()

	return coordenadas

}

export const useBuscarHistoricoRotasEquipamento = (equipamentoId: string | undefined) => {

	const coordenadasValores: {equipamentoId: string, data: string, latitude: number, longitude: number} = {
		equipamentoId: "",
		data: "",
		latitude: 0,
		longitude: 0
	}

	const coordenadas: (string|number)[][] = [[]]	

	historicoPosicoes.filter((posicoes) => {
		if(equipamentoId === posicoes.equipmentId) {
			posicoes.positions.map((coordenadasEquipamento) => {
				const equipamentoId = posicoes.equipmentId
				const data = coordenadasEquipamento.date
				const latitude = coordenadasEquipamento.lat
				const longitude = coordenadasEquipamento.lon

				coordenadasValores.equipamentoId = equipamentoId
				coordenadasValores.data = data

				coordenadasValores.latitude = latitude
				coordenadasValores.longitude = longitude

				coordenadas.push([
					coordenadasValores.equipamentoId,
					coordenadasValores.data,
					coordenadasValores.latitude, 
					coordenadasValores.longitude
				])
			})
		}
	})

	coordenadas.shift()

	return coordenadas
}

export const UseBuscarTodosOsEstados = (estadoId: string | undefined) => {

	let nomeEstado = ""

	estados.filter((estado) => {
		estadoId === estado.id ? nomeEstado = estado.name : ""
	})

	return nomeEstado

}

export const UseRetornarStatus = (equipamentoId: string) => {

	const status = UseBuscarEstadoAtual(equipamentoId)

	switch (status) {
	case "Operando":
		return operando
	case "Manutenção": 
		return manutencao
	case "Parado":
		return parado
	default:
		break
	}
}

export const UseHorasTotaisTrabalhadas = (equipamentoId: string | undefined) => {

	let dataInicial: Date = new Date()
	let dataFinal: Date = new Date()

	historicoEstados.filter((estados) => {
		if(equipamentoId === estados.equipmentId) {
			dataInicial = new Date(estados.states[0].date)
			dataFinal = new Date(estados.states[estados.states.length - 1].date)
		}
	})

	const horasTotais = converterEmHoras(dataInicial,dataFinal )

	return horasTotais
}

export const UseHorasTotaisDeUmEstado = (equipamentoId: string | undefined, estadoId: string) => {

	const dataInicial: Date[]= []
	const dataFinal: Date[] = []

	historicoEstados.filter((estados) => {
		if(equipamentoId === estados.equipmentId) {
			for (let index = 0; index < estados.states.length; index++) {
				if(estados.states[index].equipmentStateId === estadoId) {
					dataInicial.push(new Date(estados.states[index].date))
					if(index < estados.states.length - 1) {
						dataFinal.push(new Date(estados.states[index + 1].date))
					}
				}		
			}
		}
	})	

	const horasTotais = converterEmHorasArray(dataInicial, dataFinal)

	return horasTotais
}