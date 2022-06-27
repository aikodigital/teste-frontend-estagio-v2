import './Filter.css'
import React, { useState } from 'react'

const equipmentState = require('../../data/equipmentState.json')
const equipmentModel = require('../../data/equipmentModel.json')

const Filter = (props) => {

    const [search, setSearch] = useState('')

    function uncheckFilters() {
        const allFilters = document.querySelectorAll('.equipment-filter input')
        for (let i = 0 ; i < allFilters.length ; i++) {
            allFilters[i].checked = false
        }
        props.stateFilter('')
        props.modelFilter('')
        props.setSearch('')
        setSearch('')
        setFilterMobile(false)
    }

    function searchClick() {
        props.setSearch(search)
        setFilterMobile(false)
    }

    const [filterMobile, setFilterMobile] = useState(false)

    function filterMobileSwitch() {
        setFilterMobile(!filterMobile)
    }

    return (
        <>
            <span onClick={filterMobileSwitch} className={filterMobile ? 'close-filter active' : 'close-filter'}></span>
            <div className={filterMobile ? 'equipment-filter active' : 'equipment-filter'}>
                <h2>Filtros</h2>

                <button onClick={filterMobileSwitch} className={filterMobile ? 'filter-mobile-switch active' : 'filter-mobile-switch'}>
                    <span>X</span>
                </button>

                <div className={filterMobile ? "equipment-filter-wrap active" : "equipment-filter-wrap"}>
                    <div className="states-filter">
                        <h3>Estado</h3>
                        <ul className='states-filter-list'>
                            {
                                equipmentState.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <input type='radio' 
                                                    name='state' 
                                                    id={item.id} 
                                                    onClick={e => props.stateFilter(e.target.id)} />
                                            <label htmlFor="state">{item.name}</label>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="model-filter">
                        <h3>Modelo</h3>
                        <ul className='model-filter-list'>
                            {
                                equipmentModel.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <input type='radio' 
                                                    name='model' 
                                                    id={item.id} 
                                                    onClick={e => props.modelFilter(e.target.id)} />
                                            <label htmlFor="model">{item.name}</label>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="search-filter">
                        <h3>Pesquisa</h3>
                        <div className="search-filter-wrap">
                            <input type="text" onChange={e => setSearch(e.target.value)} value={search} />
                            <button className='search-filter-button' onClick={searchClick}>
                                <img src={require('../../img/search.png')} alt="Botão de Pesquisa" />
                            </button>
                        </div>
                    </div>

                    <button onClick={uncheckFilters} className="filters-clear-button">Limpar filtros</button>
                </div>
            </div>
        </>
    )
}

export default Filter