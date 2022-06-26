import EquipmentPositionTimeline from "../components/EquipmentPositionTimeline"
import EquipmentInfo from "../components/EquipmentInfo"
import Header from "../components/Header"
import Maps from "../components/Maps"
import equipments from '../../data/equipment.json'
import { useParams } from "react-router-dom"

function Equipment() {
    const { equipmentId } = useParams();
    const equipment = equipments.filter(equipment => equipment.id == equipmentId)[0]

    return (
        <div className="flex h-screen">
            <Header />

            <main className="flex flex-col flex-1">
                <Maps />
                {equipment ? <EquipmentPositionTimeline /> : null}
            </main>

            {equipment ? <EquipmentInfo /> : null}
        </div>
    )
  }
  
  export default Equipment
  