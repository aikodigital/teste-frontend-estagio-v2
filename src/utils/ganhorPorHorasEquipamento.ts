import { UseBuscarNomeModelo } from "../hooks/useBuscarInformacoes"


export const UseGanhosPorHorasEquipamento = (equipamentoId: string | undefined) => {

	const nomeDoModelo = UseBuscarNomeModelo(equipamentoId)

	switch (nomeDoModelo) {
	case "Harvester":
		return [200, -20]
	case "Caminhão de carga":
		return [70, 0]
	case "Garra traçadora":
		return [100, -5]
	}

	return [0,0]
}

