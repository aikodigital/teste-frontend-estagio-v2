import './StatesHistoryPage.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Filter from '../Filter/Filter'

import { getEquipmentIcon, getLastEquipmentState } from '../../scripts/getData'

const equipment = require('../../data/equipment.json')

const StatesHistoryPage = () => {

    const [stateFilter, setStateFilter] = useState('')
    const [modelFilter, setModelFilter] = useState('')
    const [search, setSearch] = useState('')

    function stateFilterFunc(e) {
        setStateFilter(e)
    }

    function modelFilterFunc(e) {
        setModelFilter(e)
    }

    function checkStateFilter(id) {
        if (getLastEquipmentState(id).id.includes(stateFilter)) {
            return true
        } else {
            return false
        }
    }

    function checkModelFilter(item) {
        if (item.equipmentModelId.includes(modelFilter)) {
            return true
        } else {
            return false
        }
    }

    function checkSearchFilter(item) {
        const lowerName = item[1].name.toLowerCase()

        const lowerSearch = search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if(lowerName.includes(lowerSearch)) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className='states-history-page'>
            <Filter stateFilter={stateFilterFunc} 
                    modelFilter={modelFilterFunc} 
                    setSearch={setSearch} 
                    search={search} />
            <div className="equipment-cards-wrap">
                {
                    equipment.map((item, index) => {
                        
                        function checkFilter(i) {
                            if (checkStateFilter(i[0]) && checkModelFilter(i[1]) && checkSearchFilter([i[0], i[1]])) {
                                return ''
                            } else {
                                return 'none'
                            }
                        }

                        return (
                            <Link to={`/states/${item.name}`} key={index} style={{display: checkFilter([index, item])}} >
                                <div className='equipment-card'>
                                    <div className="equipment-card-inside" 
                                        style={{borderLeftColor: getLastEquipmentState([index]).color}}>
                                        <img src={require('.././../img/' + getEquipmentIcon(item) + '.png')} alt="Ícone do Equipamento" />
                                        <h2>{item.name}</h2>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StatesHistoryPage