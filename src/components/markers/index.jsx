import React,{useState} from 'react'
import { Circle, Marker, Popup, Tooltip } from 'react-leaflet';
import { Button, Typography } from '@mui/material';
import L from 'leaflet'
import equipmentArr from '../../data/dataTratement';
import StateHistory from '../stateHistory';

const Markers = () => {
    const [modalControlPositions, setModalControlPositions] = useState([false,"0"])
    const [modalControlStates, setModalControlStates] = useState([false,"0"])

    const closeStates = (id) =>(
        setModalControlStates([false,id])
    )

    const tractor = new L.icon({
        iconUrl: './assets/tractor.png',
        iconSize: [30, 30],
    })

    const truck = new L.icon({
        iconUrl: './assets/truck.png',
        iconSize:     [35, 35],
    })

    const garra = new L.icon({
        iconUrl: './assets/garra.png',
        iconSize: [35,35],
    })

    return (
        <>
            {
                equipmentArr.map((equip) =>{
                    if(equip.model === "Caminhão de carga"){
                        return(
                        <Marker key={equip.id} icon={truck} position={[equip.atualPosition[1],equip.atualPosition[2]]}>
                            <Popup>
                                <p>Nome:{equip.name}</p>
                                <p>Modelo:{equip.model}</p>
                                Estado:<p style={{color:equip.atualState[1],display:'inline'}}>{equip.atualState[0]}</p>
                                <Button size={'small'} style={{display:'block'}} onClick={()=>{setModalControlPositions([true,equip.id])}}>Histórico Posiçoes</Button>
                                <Button size={'small'} style={{display:'block'}} onClick={()=>{setModalControlStates([true,equip.id])}}>Histórico Estados</Button>
                                {modalControlPositions[0] === true && modalControlPositions[1] === equip.id &&(
                                    equip.positionHistory.map((pos)=>(
                                        <Circle center={[pos[1],pos[2]]} pathOptions={{color:'red'}}>
                                            <Tooltip>
                                                <Typography>Data:{pos[0].split('T')[0]}</Typography>
                                                <Typography>Horario:{pos[0].split('T')[1].split('.')[0]}</Typography>
                                            </Tooltip>
                                        </Circle>
                                    ))
                                )}
                                {modalControlStates[0] === true && modalControlStates[1] === equip.id &&(
                                    <StateHistory equip={equip} close={closeStates} />
                                )}
                            </Popup>
                        </Marker>
                        )
                    }else if(equip.model === "Harvester"){
                        return(
                            <Marker key={equip.id} icon={tractor} position={[equip.atualPosition[1],equip.atualPosition[2]]}>
                                <Popup>
                                    <p>Nome:{equip.name}</p>
                                    <p>Modelo:{equip.model}</p>
                                    Estado:<p style={{color:equip.atualState[1],display:'inline'}}>{equip.atualState[0]}</p>
                                    <Button size={'small'} style={{display:'block'}} onClick={()=>{setModalControlPositions([true,equip.id])}}>Histórico Posiçoes</Button>
                                    <Button size={'small'} style={{display:'block'}} onClick={()=>{setModalControlStates([true,equip.id])}}>Histórico Estados</Button>
                                    {modalControlPositions[0] === true && modalControlPositions[1] === equip.id &&(
                                        equip.positionHistory.map((pos)=>(
                                            <Circle center={[pos[1],pos[2]]} pathOptions={{color:'red'}}>
                                                <Tooltip>
                                                    <Typography>Data:{pos[0].split('T')[0]}</Typography>
                                                    <Typography>Horario:{pos[0].split('T')[1].split('.')[0]}</Typography>
                                                </Tooltip>
                                            </Circle>
                                        ))
                                    )}
                                    {modalControlStates[0] === true && modalControlStates[1] === equip.id &&(
                                        <StateHistory equip={equip} close={closeStates} />
                                    )}
                                </Popup>
                            </Marker>
                        )
                    }else{
                        return(
                            <Marker key={equip.id} icon={garra} position={[equip.atualPosition[1],equip.atualPosition[2]]}>
                                <Popup>
                                    <p>Nome:{equip.name}</p>
                                    <p>Modelo:{equip.model}</p>
                                    Estado:<p style={{color:equip.atualState[1],display:'inline'}}>{equip.atualState[0]}</p>
                                    <Button size={'small'} style={{display:'block'}} onClick={()=>{setModalControlPositions([true,equip.id])}}>Histórico Posiçoes</Button>
                                    <Button size={'small'} style={{display:'block'}} onClick={()=>{setModalControlStates([true,equip.id])}}>Histórico Estados</Button>
                                    {modalControlPositions[0] === true && modalControlPositions[1] === equip.id &&(
                                        equip.positionHistory.map((pos)=>(
                                            <Circle center={[pos[1],pos[2]]} pathOptions={{color:'red'}}>
                                                <Tooltip>
                                                    <Typography>Data:{pos[0].split('T')[0]}</Typography>
                                                    <Typography>Horario:{pos[0].split('T')[1].split('.')[0]}</Typography>
                                                </Tooltip>
                                            </Circle>
                                        ))
                                    )}
                                    {modalControlStates[0] === true && modalControlStates[1] === equip.id &&(
                                        <StateHistory equip={equip} close={closeStates} />
                                    )}
                                </Popup>
                            </Marker>
                        )
                    }
                })
            }
        </>
    )
}

export default Markers;