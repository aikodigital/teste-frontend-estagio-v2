// Import React and react-router-dom
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

// Import json
import equipment from '../../data/equipment.json';
import equipmentModel from '../../data/equipmentModel.json';
import equipmentPosition from '../../data/equipmentPositionHistory.json'
import equipmentStateHistory from '../../data/equipmentStateHistory.json';
import equipmentState from '../../data/equipmentState.json';

// Import DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from 'date-fns/locale/pt-BR';
import { registerLocale } from "react-datepicker";

// Import Leaflet
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

// Import CSS
import './View.css';


export const View = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [position, setPosition] = useState([-23.5995887, -51.640846])
    const [state, setState] = useState('')
    const { id } = useParams();

    const navigate = useNavigate();

    const idEquip = equipment.find(element => element.id === id);
    const nameEquip = equipmentModel.find(element => element.id === idEquip.equipmentModelId);
    const datas = equipmentStateHistory.find(element => element.equipmentId === idEquip.id)
    const positions = equipmentPosition.find(element => element.equipmentId === idEquip.id)
    const positionEquip = equipmentPosition.find(element => element.equipmentId === idEquip.id).positions
    const equipmentEstade = equipmentStateHistory.find(element => element.equipmentId === idEquip.id)


    registerLocale('pt-BR', pt)

    const colorState = state.color

    function pad(value) {
        return value.toString().padStart(2, 0);
    }


    // Search
    const search = () => {
        const d = startDate;
        const dataFormat = (`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.000Z`);

        const dataP = positionEquip.find(element => element.date === dataFormat)

        if (dataP) {
            let local = [dataP.lat, dataP.lon]

            setPosition(local)
        } else {
            alert('Nenhum registro nessa data e hora')
        }

        const equipmentEstade = equipmentStateHistory.find(element => element.equipmentId === idEquip.id)
        const stateId = equipmentEstade.states.find(element => element.date === dataFormat)
        console.log(stateId);

        if (!stateId) {
            alert('Sem informação de "estado"')
        } else {
            const stateName = equipmentState.find(element => element.id === stateId.equipmentStateId)
            setState(stateName)
        }
    }


    // Mapa
    const DisplayMap = () => {
        return (
            <div>
                <MapContainer center={{
                    lat: position[0],
                    lng: position[1],
                }}
                    zoom={13}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[position[0], position[1]]} />
                </MapContainer>
                <div className='state'>
                    <label>Estado:</label>
                    <p>{state.name}</p>
                    <div className='colorState' style={{ background: colorState }}></div>
                </div>
            </div >
        )
    }


    const dataSelecionada = (datasele) => {
        const dataSe = datasele.target.value;
        const value = positionEquip.find(element => element.date === dataSe)
        const stateId = equipmentEstade.states.find(element => element.date === dataSe)

        const stringExemplo = dataSe;
        // const resultado = stringExemplo.substring(6, 0);
        console.log(stringExemplo);

        if (value === undefined) {
            alert('Nenhum registro de localização nessa data e hora')

        } else {
            if (!stateId) {
                alert('Sem informação de "estado"')
                setState('')
            } else {
                const stateName = equipmentState.find(element => element.id === stateId.equipmentStateId)
                setState(stateName)
            }
            let local = [value.lat, value.lon]
            setPosition(local)
            window.scrollTo(0, 0);
        }
    }


    return (
        <div className='bodyView'>
            <div className='view'>
                <div className='infoEquip'>
                    <div className='glass'>
                        <div className='info'>
                            <label>Modelo:</label>
                            <p>
                                {idEquip.name}
                            </p>
                            <label>Nome:</label>
                            <p>{nameEquip.name}</p>

                        </div>
                        <div>


                        </div>
                        <div className='date'>
                            <label>Selecione data e hora para ver localização no mapa:</label>
                            <DatePicker
                                locale='pt-BR'
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat='dd/MM/yyyy'
                                showTimeSelect
                                className='date'
                            />
                            <button className='btn' onClick={search}>Pesquisar</button>
                        </div>

                        <p>Ou selecione uma data e hora na lista 'Historico de localização'</p>

                    </div>
                </div>

                <div className='map'>
                    <DisplayMap />
                </div>

            </div>

            <button className='btn' onClick={() => {
                navigate('/')
            }} >
                Voltar
            </button>

            <h2>Historico de localização do equipamento:</h2>

            <div className='contentState'>
                {positions.positions.map((pos, index) => {
                    return (
                        <div className='contentStateDiv' key={index}>
                            <p>
                                {`Data:
                                ${pos.date.substring(10, 8)}/${pos.date.substring(7, 5)}/${pos.date.substring(4, 0)} -
                                Hora:
                                ${pos.date.substring(13, 11)}:${pos.date.substring(16, 14)}:${pos.date.substring(19, 17)}:${pos.date.substring(23, 20)}
                            `}
                            </p>
                            <label>Selecione para ver no mapa: </label>
                            <button value={pos.date} onClick={dataSelecionada}>Selecionar</button>
                        </div>
                    )
                })}
            </div>

            <button className='btn' onClick={() => {
                navigate('/')
            }} >
                Voltar
            </button>

            <h2>Historico de estado do equipamento:</h2>

            <div className='contentState'>

                {datas.states.map((data, index) => {
                    return (
                        <div className='contentStateDiv'>
                            <p >{`Data:
                                ${data.date.substring(10, 8)}/${data.date.substring(7, 5)}/${data.date.substring(4, 0)} -
                                Hora:
                                ${data.date.substring(13, 11)}:${data.date.substring(16, 14)}:${data.date.substring(19, 17)}:${data.date.substring(23, 20)}
                            `}</p>
                            {equipmentState.map((state, index) => {
                                if (state.id === data.equipmentStateId) {
                                    return (
                                        <div key={index}>
                                            <p style={{ color: state.color }}>{state.name}</p>

                                        </div>
                                    )
                                }
                            })}
                        </div>
                    )
                }


                )}
            </div>

            <button className='btn' onClick={() => {
                navigate('/')
            }} >
                Voltar
            </button>

        </div >
    )
}
