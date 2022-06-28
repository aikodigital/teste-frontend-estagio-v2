import React from 'react';
import {useState} from 'react';
import './App.css';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import CollectionsJoin from './dataHandling/collectionsJoin';
import { myIconOperando, myIconParado, myIconManutencao } from './icon';

function App() {

  const options = { weekday: 'short', day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' } as const;
  const [isShown, setIsShown] = useState(false);

  function Icon(stateName: string) {
    if (stateName === 'Operando') {
      return myIconOperando;
    }
    else if (stateName === 'Parado') {
      return myIconParado;
    }
    else {
      return myIconManutencao;
    }
  }

  const globalCollection = CollectionsJoin();

  let states: any = [];

  let finalStates: any = [];

  async function log(equipId: string) {
    setIsShown(current => !current);
    //states = [];
    console.log(globalCollection);
    for (let i = 0; i < globalCollection.length; i++) {
      if (globalCollection[i].equipmentId === equipId) {
        for (let j = 0; j < globalCollection[i].equipmentStateHistory.length; j++) {
          let stateModel =  {
            "date": globalCollection[i].equipmentStateHistory[j].date,
            "stateName": globalCollection[i].equipmentStateHistory[j].stateName
          }

          states.push(stateModel);
        }
      }
    }
    finalStates = await states;
    ShowStateHistory(finalStates)
  }

  function ShowStateHistory(finalStates: any) {

    return (
      <div className='stateHistory'>
        {states.map((state: any) => (
          <div className='state' key={state.date}>
            <p>{state.stateName}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="App">
      <MapContainer center={[-19, -46]} zoom={8} scrollWheelZoom={true}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        {globalCollection.map(equip => (
          <Marker key={equip.equipmentId} position={[equip.lastPositionLat, equip.lastPositionLon]} icon={Icon(equip.lastStateName)}>
            <Popup>
              <p>{equip.equipmentName}</p>
              <p>{equip.lastStateDate.toLocaleString('pt-BR', options)}</p>
              <p>{equip.lastStateName}</p>
              <button onClick={() => {log(equip.equipmentId)}}>Histórico de Estados</button>
            </Popup>
          </Marker>
        ))}


      </MapContainer>

      {isShown && <ShowStateHistory/>}

    </div>
  );
}

export default App;
