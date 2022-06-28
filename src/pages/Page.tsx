import EquipmentPositionTimeline from "../components/EquipmentPositionTimeline"
import EquipmentInfo from "../components/EquipmentInfo"
import Header from "../components/Header"
import Maps from "../components/Maps"
import equipments from '../../data/equipment.json'
import { useParams } from "react-router-dom"
import { useState } from "react"

function Equipment() {
    const { equipmentId } = useParams();
    const [ filterConfigs, setFilterConfigs ] = useState({ model: {}, state: {}, });
    const equipment = equipments.filter(equipment => equipment.id == equipmentId)[0]

    return (
        <div className="flex h-screen">
            <Header filterConfigs={filterConfigs} setFilterConfigs={setFilterConfigs} />

            <main className="flex flex-col flex-1">
                <Maps filterConfigs={filterConfigs} setFilterConfigs={setFilterConfigs} />
                {equipment ? <EquipmentPositionTimeline /> : null}
            </main>

            {equipment ? <EquipmentInfo /> : null}
        </div>
    )
  }
  
  export default Equipment
  