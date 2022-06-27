import { useNavigate } from "react-router-dom"
import { sortByName, sortByModel, sortByState } from '../../utils/tableSort'

const EquipmentsTable = ({ data, setData, elementsAsc, setElementsAsc }) => {

    const navigate = useNavigate()

    function createTableRow(element, idx) {
        const modelName = (data.models.find(model => model.id === element.equipmentModelId)).name
        const stateId = (data.stateHistory.find(stateHistory => stateHistory.equipmentId === element.id)).states.at(-1).equipmentStateId
        const stateName = (data.states.find(state => state.id === stateId)).name

        return <tr key={idx} className="bg-green upscaleHover" onClick={() => navigate(`/equipments/${element.id}`,
            {
                state: {
                    name: element.name,
                    model: data.models.find(model => model.id === element.equipmentModelId),
                    stateHistory: (data.stateHistory.find(stateHistory => stateHistory.equipmentId === element.id)).states,
                    positionHistory: (data.positionHistory.find(positionHistory => positionHistory.equipmentId === element.id))
                }
            }
        )}>
            <td>{element.name}</td>
            <td>{modelName}</td>
            <td>{stateName}</td>
        </tr>
    }

    function handleSort(orderBy) {
        let sortArr
        if (orderBy === "name") {
            sortArr = sortByName(data, elementsAsc)
        } if (orderBy === "model") {
            sortArr = sortByModel(data, elementsAsc)
        } if (orderBy === "state") {
            sortArr = sortByState(data, elementsAsc)
        }

        setData(prevState => {
            return {
                ...prevState,
                "name": sortArr
            }
        })

        setElementsAsc(prevState => {
            return {
                ...prevState,
                [orderBy]: !prevState[orderBy]
            }
        })
    }

    function searchInTable(e) {
        const lowerCaseText = (e.target.value).toLowerCase()
        const rows = document.querySelectorAll('tbody > tr')

        if (e.target.value === "") {
            rows.forEach(element => {
                element.style.display = 'table-row'
            })
        }

        if (e.target.value !== "") {
            rows.forEach(element => {
                const nameContains = (element.childNodes[0].textContent).toLowerCase().includes(lowerCaseText)
                const modelContains = (element.childNodes[1].textContent).toLowerCase().includes(lowerCaseText)
                const stateContains = (element.childNodes[2].textContent).toLowerCase().includes(lowerCaseText)

                if (!nameContains && !modelContains && !stateContains) {
                    element.style.display = 'none'
                } else {
                    element.style.display = 'table-row'
                }
            })
        }
    }

    return (<>
        <input className="form-control" style={{ width: '40rem', marginBottom: '15px' }} onChange={(e) => searchInTable(e)} type="text" placeholder="Buscar..." />
        <table className={`table list-group-item-success`}>
            <thead>
                <tr>
                    <th className="upscaleHover" onClick={() => handleSort("name")}>Nome</th>
                    <th className="upscaleHover" onClick={() => handleSort("model")}>Modelo</th>
                    <th className="upscaleHover" onClick={() => handleSort("state")}>Estado</th>
                </tr>
            </thead>
            <tbody>
                {data.equipments.map((element, idx) => createTableRow(element, idx))
                }
            </tbody>
        </table>
    </>
    )
}

export default EquipmentsTable