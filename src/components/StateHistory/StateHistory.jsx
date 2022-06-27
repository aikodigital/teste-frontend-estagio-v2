import './StateHistory.css'
import React from 'react'

import { getEquipmentState } from '../../scripts/getData'

const equipment = require('../../data/equipment.json')
const equipmentStateHistory = require('../../data/equipmentStateHistory.json')

const StateHistory = (props) => {
    return (
        <div className='state-history'>
            <h1>Histórico dos estados do: <span>{equipment[props.index].name}</span></h1>
            <div className='state-history-wrap'>
                {
                    equipmentStateHistory[props.index].states.map((item, index) => {

                        let date = new Date(item.date).toLocaleDateString()

                        return (
                            <div key={index} className='state-history-card' >
                                <div className="state-history-card-wrap" 
                                    style={{borderLeftColor: getEquipmentState([props.index, index]).color}}>
                                    {<p><span>Data:</span> {date}</p>}
                                    {<p><span>Horário:</span> {date}</p>}
                                    {<p><span>Estado:</span> {getEquipmentState([props.index, index]).name}</p>}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StateHistory