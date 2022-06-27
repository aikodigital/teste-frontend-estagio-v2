import styles from './StatesHistoryTable.module.css'

const StatesHistoryTable = ({ stateHistory, states }) => {
  
    function createTableRow(element, idx) {
        const dateCell = new Date(element.date).toLocaleString('pt-BR', { timeZone: 'UTC', hour12: false })
        const stateCell = states.find(state => state.id === element.equipmentStateId)

        return <tr key={idx} className="bg-green upscaleHover">
            <td><span className="dot" style={{ backgroundColor: stateCell.color }}></span></td>
            <td>{stateCell.name}</td>
            <td>{dateCell}</td>
        </tr>
    }


    return (<>
        <h3 id="history">Histórico de Estados</h3>
        <table className={`table list-group-item-success table ${styles.table}`}>
            <thead>
                <tr>
                    <th></th>
                    <th>Estado</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {stateHistory.map((element, idx) => createTableRow(element, idx))}
            </tbody>
        </table>

    </>)

}

export default StatesHistoryTable