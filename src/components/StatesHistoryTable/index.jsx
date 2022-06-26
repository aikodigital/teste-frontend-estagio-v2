import { getEquipmentStateById } from '../../api/Equipment';
import './styles.scss'

export function StatesHistoryTable({ stateHistory }) {
    return (
        <div className="table-scroll">
            <table>
                <tr>
                    <th>Data</th>
                    <th>Estado</th>
                </tr>
                {
                    stateHistory.map((e) => {
                        return (
                            <tr>
                                <td>{new Date(e.date).toDateString()}</td>
                                <td><span style={{ backgroundColor: getEquipmentStateById(e.equipmentStateId).color }}>{getEquipmentStateById(e.equipmentStateId).name}</span></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}