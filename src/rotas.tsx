import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { RecoilRoot } from "recoil"
import Header from "./components/header"
import EquipamentoDetalhes from "./pages/equipamentoDetalhes"
import EquipamentoHistoricoRotas from "./pages/equipamentoHistoricoRotas"
import Inicio from "./pages/inicio"

const Rotas = () => {
	return (
		<RecoilRoot>
			<Router>
				<Header/>
				<Routes>
					<Route path="/" element={<Inicio/>}/>
					<Route path="/equipamento/:id" element={<EquipamentoDetalhes/>}/>
					<Route path="/equipamento/:id/historico" element={<EquipamentoHistoricoRotas/>}/>
				</Routes>
			</Router>
		</RecoilRoot>
	)
}

export default Rotas