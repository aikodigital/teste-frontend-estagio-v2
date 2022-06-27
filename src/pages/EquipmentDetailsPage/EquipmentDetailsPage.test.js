
import { render, waitFor } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import EquipmentDetailsPage from './EquipmentDetailsPage'
import { DUMMY_DATA } from '../../utils/testDummyData'

describe('EquipmentDetailsPage', () => {
    const { container } = render(<Router>
        <EquipmentDetailsPage id={DUMMY_DATA.id} equipmentsData={DUMMY_DATA.equipmentsData} />
    </Router>)

    test("Deve conter o componente BackButton", () => {
        const backButton = container.querySelector("button")
        expect(backButton)
    })

    test("Deve conter o EquipmentDetailsCard", () => {
        const equipmentDetailsCard = container.querySelector("#equipmentDetailsCard")
        expect(equipmentDetailsCard)
    })

    test("Deve conter o componente StatesHistoryTable", async () => {
        await waitFor(() => {
            const table = container.querySelector("table")
            expect(table)
        })
    })


    test("Deve conter o LeafletMap", () => {
        const leafletMap = container.querySelector("#mapId")
        expect(leafletMap)
    })
})