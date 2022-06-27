
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import EquipmentsPage from './EquipmentsPage'

describe('EquipmentsPage', () => {
    const {container} = render(<Router><EquipmentsPage /></Router>)

    test("Deve conter o título", () => {
        const equipmentsPageTitle = screen.getByText("Lista de Equipamentos")
        expect(equipmentsPageTitle)
    })

    test("Deve conter o componente BackButton", () => {
        const backButton = container.querySelector("button")
        expect(backButton)
    })

    test("Deve conter a tabela de equipamentos", () => {
        const equipmentsTable = container.querySelector("table")
        expect(equipmentsTable)
    })

    test("Deve conter o LeafletMap", () => {
        const leafletMap = container.querySelector("#mapId")
        expect(leafletMap)
    })


})