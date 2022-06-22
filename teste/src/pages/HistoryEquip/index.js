import { useParams } from "react-router-dom";
import './style.css'
import EquipmentCard from "../../components/EquipmentCards"
import { findEquipmentName } from "../../accessData/usingData";

function StatesHistory() {
    const params = useParams();
    
    return(
        <div className="container text-center mt-5">
            <h3 className="title">Histórico do equipamento: {findEquipmentName(params.equipmentId)}</h3>
            <div className="cards-container">
                <div className="row">
                    <EquipmentCard equipmentId={params.equipmentId}/>
                </div>
            </div>
        </div>
    )
}

export default StatesHistory;
