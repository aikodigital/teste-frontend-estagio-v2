import { useEffect, useState } from "react"
import { getEquipments, getModels, getStates, getEquipmentsStateHistory, getEquipmentsPositionHistory } from "../../utils/fakeApi"

import LeafletMap from "../../components/LeafletMap/LeafletMap"
import EquipmentsTable from "../../components/EquipmentsTable/EquipmentsTable"
import BackButton from "../../components/BackButton/BackButton"

const EquipmentsPage = () => {

    const [displaying, setDisplaying] = useState(false)
    const [data, setData] = useState({})
    const [elementsAsc, setElementsAsc] = useState({
        "name": true,
        "model": true,
        "state": true,

    })

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        Promise.all([getEquipments(), getModels(), getStates(), getEquipmentsStateHistory(), getEquipmentsPositionHistory()])
            .then(res => {
                setData({
                    "equipments": res[0],
                    "models": res[1],
                    "states": res[2],
                    "stateHistory": res[3],
                    "positionHistory": res[4]
                })
                setDisplaying(true)
            })
    }


    return (
        <>
        <BackButton />
            <h1>Lista de Equipamentos</h1>
            {displaying &&
            <> 
                <EquipmentsTable data={data} setData={setData} elementsAsc={elementsAsc} setElementsAsc={setElementsAsc}/>
                <h3>Posição atual</h3>
                <LeafletMap models={data.models} equipments={data.equipments} positionHistory={data.positionHistory} getAllActual={true}/>
            </>
            }

        </>
    )
}

export default EquipmentsPage