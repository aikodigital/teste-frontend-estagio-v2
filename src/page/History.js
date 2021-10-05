import React from 'react';
import './History.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getIconHarv, getIconTruck, getIconExCavator } from '../createIcon/icons'
import equipmentModel from '../data/equipmentModel.json';
import equipmentID from '../data/equipment.json'
import { Link } from 'react-router-dom';
import equipment from '../data/equipment.json'
import todaySt from '../data/equipmentState.json'
import location from '../data/equipmentPositionHistory.json'
import aiko from '../img/aiko.png'
import { useState } from 'react/cjs/react.development';

function History (){
  const [filters, setFilters] = React.useState({
      equipments: false,
      status: false,
      position: false,
      history: false
  })
  const [equipPosition, setEquipment] =   React.useState('')
  const [filtered, setFiltered] = useState(false)

  function verifyModel(equipment) {
    if(equipment === 'Harvester') {
      return getIconHarv()
    }
    if(equipment === 'Caminhão de carga') {
      return getIconTruck()
    }
    if(equipment === 'Garra traçadora') {
      return getIconExCavator()
    }
}


function verifyEquipmentModel (equipment) {
  const item = equipmentModel.find((item) => equipment === item.id)
  return verifyModel(item.name)
}

  function applyFilter ({target: {value}}) {
      if(value === 'Equipments') {
        setFilters({equipments: true})
        setFiltered(true);
      }
      else if(value === 'Status'){
        setFilters({status:true})
        setFiltered(true);
        }
      else if(value === 'Positions'){
        setFilters({position:true})
        setFiltered(true);
      }
      else if(value === 'state'){
        setFilters({history:true})
        setFiltered(true);
      }
  }

  function applyEquipFilter ({target: { value }}) {
    findEquipment(value)
    setFilters({position: true})
    setFiltered(true);
  }

  function showingEquip () {
    if (filters.equipments === true) {
      return (
        equipment.map((equip, index) =>(
            <tr key={ index }>
              <td>{equip.id}</td>
              <td>{equip.name}</td>
              <td>{equip.equipmentModelId}</td>
            </tr>
        ))
      )
    }
    else if (filters.status === true) {
     return(
      todaySt.map((status, index) => (
        <tr key={ index }>
          <td>{status.id}</td>
          <td></td>
          <td></td>
          <td>{status.name}</td>
        </tr>
      ))
      )
    }
    return
  }

  function findEquipment(name) {
    return setEquipment(equipment.find((item) => item.name === name).id)
  }

  function equipmentPosition (id) {
    if (filters.position === true){
      return (
        location.filter((equipment) => equipment.equipmentId === id)
          .map((item) => item.positions.map((position, index) => (
          <tr key={ index }>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{position.date}</td>
            <td>Longitude: {position.lon}, Latitude: {position.lat}</td>
          </tr>
      )))
    )}
  }

  function equipmentPositionMap(id) {
    console.log(filtered)
    if(filtered){
      return (
        location.filter((equipment) => equipment.equipmentId === id)
          .map((item, index) => item.positions.map((position) => (
            <Marker key={index} icon={verifyEquipmentModel(equipmentID[index].equipmentModelId)} position={[position.lat, position.lon]}>
              <Popup>
                {position.date}
              </Popup>
            </Marker>
      )))
    )}
  }

    return(
        <section id="div">
            <header id="historyBack">
              <Link to="/">
                <img data-testid="companyLogo" src={aiko} alt="logo" id="aikoImg" style={{ height: '50px', width: '135px' }}/>
              </Link>
              <div className="trackIT">
                <p id="title"> TrackIT - Database </p>
              </div>
              <Link to="/" id="back"> <button className="buttonLink"> Voltar à página inicial </button></Link>
            </header>
            {filtered &&
              <MapContainer
              id="LeafMap"
              center={[-19.151801, -46.007759]}
              zoom={10} scrollWheelZoom={true}
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {equipmentPositionMap(equipPosition)}
              </MapContainer>
            }
            <label id ="equipLabel" htmlFor ="">Escolha o filtro desejado</label>
                <select name="equipmentInfo" id="equipmentInfo"
                  onClick={applyFilter}>
                  <option value="Equipments">Equipamentos</option>
                  <option value="Status">Status do equipamento</option>
                </select>
                <select onClick={ applyEquipFilter }>
                   <option value="CA-0001">CA-0001</option>
                   <option value="CA-0002">CA-0002</option>
                   <option value="CA-0003">CA-0003</option>
                   <option value="CA-0004">CA-0004</option>
                   <option value="HV-1001">HV-1001</option>
                   <option value="HV-1002">HV-1002</option>
                   <option value="GT-2001">GT-2001</option>
                   <option value="GT-2002">GT-2002</option>
                   <option value="GT-2003">GT-2003</option>
                </select>
              <table>
                <thead>
                  <tr>
                   <th>ID</th>
                   <th>Nome do Maquinário</th>
                   <th>Modelo</th>
                   <th>Status</th>
                   <th>Data da posição</th>
                   <th>Histórico de posições do dia</th>
                  </tr>
                </thead>
               <tbody>
                  {filters && showingEquip()}
                  {filters && equipmentPosition(equipPosition)}
               </tbody>
             </table>
        </section>
    )
}

export default History