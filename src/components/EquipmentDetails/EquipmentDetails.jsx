import LeafletMap from "../LeafletMap/LeafletMap"
import { useEffect, useState } from "react"
import { getStates } from "../../utils/fakeApi"

import StatesHistoryTable from '../StatesHistoryTable/StatesHistoryTable'

import styles from './EquipmentDetails.module.css'


const EquipmentDetails = ({ id, equipmentsData }) => {
    const [data, setData] = useState(null)
    const [states, setStates] = useState(null)
    const [actualState, setActualState] = useState(null)
    const [earnings, setEarnings] = useState(0)
    const [efficiency, setEfficiency] = useState(0)
    const [showMap, setShowMap] = useState(null)

    const getActualState = async () => {
        const stateObj = await getStates().then(states => {
            setStates(states)
            return states.find(state => state.id === data.stateHistory.at(-1).equipmentStateId)
        })
        setActualState(stateObj)
    }

    const calculateEarningsAndProd = () => {
        let earningHours = {}
        states.forEach(x => earningHours[x.id] = 0)

        for (let index = 0; index < data.stateHistory.length - 1; index++) {
            let duration = (new Date(data.stateHistory[index + 1].date).getTime() - new Date(data.stateHistory[index].date)) / 1000 / 60 / 60
            earningHours[data.stateHistory[index].equipmentStateId] += duration
        }

        data.model.hourlyEarnings.forEach(state => setEarnings(prevState => prevState + (state.value * earningHours[state.equipmentStateId])))

        const productivity = (earningHours["0808344c-454b-4c36-89e8-d7687e692d57"] / Object.values(earningHours).reduce((a, b) => a + b)) * 100
        setEfficiency(Math.trunc(productivity))
    }

    const goToId = (id) => {
        document.getElementById(id).scrollIntoView() 
    }

    useEffect(() => {
        setData(equipmentsData)
    }, [])

    useEffect(() => {
        if (data !== null) {
            getActualState().then(() => {
                setShowMap(true)
            })
        }
    }, [data])

    useEffect(() => {
        if (states !== null) {
            calculateEarningsAndProd()
        }
    }, [states])



    return <>
        {
            data &&
            <>
                <div id="equipmentDetailsCard" className={`card ${styles.equipmentDetailsCard}`} style={{ width: `40rem` }}>
                    <div className="card-body">
                        <h4 className="text-center">Detalhes</h4>

                        <p>Nome: {data.name}</p>

                        <p>Modelo: {data.model.name}</p>

                        <p className={styles.stateP}>
                            {
                                actualState !== null && <>
                                    <span className="dot" style={{ backgroundColor: actualState.color }}></span> {actualState.name}</>
                            }
                        </p>

                        <p>Produtividade: {efficiency}%</p>

                        <h4 className="text-center">Ganhos</h4>

                        <p>Total: {earnings}</p>
                        
                        <div className={styles.buttonsWrapper}>
                            <button className="btn bg-success text-light upscaleHover" onClick={() => goToId('moveMap')}>Mapa de movimentações</button>
                            <button className="btn bg-success text-light upscaleHover" onClick={() => goToId('history')}>Histórico de movimentações</button>

                        </div>

                    </div>
                </div>

                {showMap &&
                    <>
                        <h3 id="moveMap">Mapa de movimentações</h3>
                        <LeafletMap
                            models={[data.model]}
                            equipments={[{ model: data.model, name: data.name, id }]}
                            positionHistory={[data.positionHistory.positions]}
                            stateHistory={data.stateHistory}
                            states={states}
                            getAllActual={false}
                        />
                    </>
                }

                {states !== null &&
                    <StatesHistoryTable stateHistory={data.stateHistory} states={states} />
                }

            </>
        }
    </>
}

export default EquipmentDetails