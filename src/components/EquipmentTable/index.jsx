import { useEffect, useState } from 'react';
import { getEquipmentEarn, getEquipmentLastPosition, getEquipmentLastState, getEquipmentModel, getEquipmentPositionHistory, getEquipmentProductivityPercentage, getEquipments, getEquipmentStateHistory } from '../../api/Equipment';
import { StatesHistoryTable } from '../StatesHistoryTable';
import { Modal } from '../Modal';
import { MenuItems } from '../Sidebar';
import './styles.scss'
import { PositionsHistoryMap } from '../PositionsHistoryMap';

export function EquipmentTable({ setSelectedMenu, setInitialPosition, setZoom }) {
    const [equipments, setEquipments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalComponent, setModalComponent] = useState(null);

    useEffect(() => {
        setEquipments(getEquipments());
    }, []);

    function checkOnMap(position) {
        setInitialPosition(position);
        setZoom(15);
        setSelectedMenu(MenuItems.menuMap);
    }

    function handleModal(title, component) {
        setModalTitle(title);
        setModalComponent(component);
        setShowModal(true);
    }

    return (
        <div className="equipment-table-content">
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Modelo</th>
                    <th>Produtividade (%)</th>
                    <th>Ganho</th>
                    <th>Estado</th>
                    <th>Ações</th>
                </tr>
                {
                    equipments.map((e) => {
                        const equipmentModel = getEquipmentModel(e.equipmentModelId);
                        const equipmentPositionHistory = getEquipmentPositionHistory(e.id);
                        const equipmentLastPosition = getEquipmentLastPosition(equipmentPositionHistory);
                        const equipmentStateHistory = getEquipmentStateHistory(e.id);
                        const equipmentLastState = getEquipmentLastState(equipmentStateHistory);
                        const equipmentProductivityPercentage = getEquipmentProductivityPercentage(equipmentStateHistory);
                        const equipmentEarn = getEquipmentEarn(equipmentStateHistory, equipmentModel);

                        return (
                            <tr>
                                <td>{e.name}</td>
                                <td>{equipmentModel.name}</td>
                                <td>{equipmentProductivityPercentage}%</td>
                                <td>{equipmentEarn}</td>
                                <td><span style={{ background: equipmentLastState.color }}>{equipmentLastState.name}</span></td>
                                <td>
                                    <button type='button' onClick={() => checkOnMap(equipmentLastPosition)}>Ver no mapa</button>
                                    <button type='button' onClick={(el) => handleModal(`${el.target.innerText} - ${e.name}`, <PositionsHistoryMap equipmentPositionHistory={equipmentPositionHistory} equipmentLastPosition={equipmentLastPosition}/>)}>Histórico de Posições</button>
                                    <button type='button' onClick={(el) => handleModal(`${el.target.innerText} - ${e.name}`, <StatesHistoryTable stateHistory={equipmentStateHistory}/>)}>Histórico de Estados</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <Modal show={showModal} setShow={setShowModal} title={modalTitle} reactComponent={modalComponent}/>
        </div>
    );
}