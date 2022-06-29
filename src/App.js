import {useState} from 'react'

import './App.css';
import Infos from './components/Infos';
import Map from './components/Map';

function App() {

  const [show, setShow] = useState(false);
    const [equipmentId, setEquipmentId] = useState(null);

    function showInfo(id){
        setShow(true);
        setEquipmentId(id);
    }

    function unShowInfo(id, aux){
      if(aux == 1){
        setShow(true);
      } else {
        setShow(false);
      }
        setEquipmentId(id);
    }

  return (
    <div style={{position: 'relative'}}>
      <Map click={unShowInfo}/>
      {show && <Infos click={unShowInfo} id={equipmentId}/>}
    </div >
  );
}

export default App;
