import React from "react"
import { useParams } from "react-router-dom"
import BuscaEquipamento from "../../components/buscaEquipamento"
import DadosEquipamento from "../../components/dadosEquipamento"
import HistoricoEstados from "../../components/historicoEstados"
import { UseBuscarNomeEquipamento } from "../../hooks/useBuscarInformacoes"
import styles from "./EquipamentoDetalhes.module.scss"

const EquipamentoDetalhes = () => {

	const params = useParams()

	return (
		<div className={styles.container}>
			<h1 className={styles.container__title}> Dados do equipamento <br /> {UseBuscarNomeEquipamento(params.id)}</h1>
			<div>
				<DadosEquipamento/>
			</div>
			<div>	
				<BuscaEquipamento/>
			</div>
			<div>
				<HistoricoEstados/>
			</div>
		</div>
	)
}

export default EquipamentoDetalhes