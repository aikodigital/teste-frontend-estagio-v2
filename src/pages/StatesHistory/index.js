import React from 'react';
import { useParams } from "react-router-dom";
import EquipmentCard from "../../components/EquipmentCards";
import {findEquipmentName} from '../../data-access/data-functions.js';

function StatesHistory() {
    const params = useParams();

    return (
        <div className="container text-center mt-5">
            <h3>Histórico de estados: {findEquipmentName(params.equipmentId)}</h3>
            <div className="cards-container">
                <div className="row">
                    <EquipmentCard equipmentId={params.equipmentId} />
                </div>
            </div>
        </div>
    );
}

export default StatesHistory;