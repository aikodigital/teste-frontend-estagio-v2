import EquipmentPositionTimeline from "../components/EquipmentPositionTimeline"
import EquipmentInfo from "../components/EquipmentInfo"
import Header from "../components/Header"
import Maps from "../components/Maps"
import { useParams } from "react-router-dom"

function Equipment() {
    let { equipmentId, equipmentPositionDate } = useParams();

    return (
        <div className="flex h-screen">
            <Header />

            <main className="flex flex-col flex-1">
                <Maps />
                {equipmentId ? <EquipmentPositionTimeline /> : null}
            </main>

            {equipmentId ? <EquipmentInfo /> : null}
        </div>
    )
  }
  
  export default Equipment
  