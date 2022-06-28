import logo from './public/content/img/aiko.png'
import styles from './css/index.module.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import equipmentPositionHistory from './public/content/data/equipmentPositionHistory.json'
import equipmentStateHistory from './public/content/data/equipmentStateHistory.json'

export default function App() {

  const equipmentWorking = {
    "id": "0808344c-454b-4c36-89e8-d7687e692d57",
    "name": "Operando",
    "color": "#2ecc71"
  }
  const equipmentStopped = {
    "id": "baff9783-84e8-4e01-874b-6fd743b875ad",
    "name": "Parado",
    "color": "#f1c40f"
  }
  const equipmentMaintenance = {
    "id": "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f",
    "name": "Manutenção",
    "color": "#e74c3c"
  }

  return (
    <>
      <div className={styles.background}>
        <div className={styles.imgDiv}>
          <img src={logo} />
        </div>

        <MapContainer className={styles.leaflet} center={[-19.126536, -45.947756]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {
            equipmentPositionHistory.map(lastLoc => (
              <Marker className={styles.marker} position={[lastLoc.positions[lastLoc.positions.length - 1].lat, lastLoc.positions[lastLoc.positions.length - 1].lon]}>
                <Popup className={styles.popup}>

                  {/* NOME DA MAQUINA */}
                  <h1 className={styles.h1Name}>
                    {
                      equipmentStateHistory[equipmentPositionHistory
                        .indexOf(lastLoc)]
                        .equipmentId
                      === "a7c53eb1-4f5e-4eba-9764-ad205d0891f9"
                      ? "CA-0001"
                      : equipmentStateHistory[equipmentPositionHistory
                          .indexOf(lastLoc)]
                          .equipmentId
                        === "1c7e9615-cc1c-4d72-8496-190fe5791c8b"
                        ? "CA-0002"
                        : equipmentStateHistory[equipmentPositionHistory
                          .indexOf(lastLoc)]
                          .equipmentId
                        === "2b5796cb-21c1-480e-8886-4498ea593a65"
                        ? "CA-0003"
                        : equipmentStateHistory[equipmentPositionHistory
                          .indexOf(lastLoc)]
                          .equipmentId
                        === "1d222cdc-01dd-4caa-8934-5351d3995cfb"
                        ? "CA-0004"
                        : equipmentStateHistory[equipmentPositionHistory
                          .indexOf(lastLoc)]
                          .equipmentId
                        === "491b983b-950c-4a88-942d-487e99b92540"
                        ? "HV-1001"
                        : equipmentStateHistory[equipmentPositionHistory
                          .indexOf(lastLoc)]
                          .equipmentId
                        === "39317fcb-79e7-4e7e-83dc-723a9b63633c"
                        ? "HV-1002"
                        : equipmentStateHistory[equipmentPositionHistory
                          .indexOf(lastLoc)]
                          .equipmentId
                        === "c79ef1de-92f3-4edd-bd55-553056640449"
                        ? "GT-2001"
                        : equipmentStateHistory[equipmentPositionHistory
                          .indexOf(lastLoc)]
                          .equipmentId
                        === "b7aaba00-13f7-44a0-8bf1-bc163afcf9d8"
                        ? "GT-2002"
                        : equipmentStateHistory[equipmentPositionHistory
                          .indexOf(lastLoc)]
                          .equipmentId
                        === "fe2a2e11-bfa6-46b6-990b-fd8175946b7e"
                        ? "GT-2003"
                        : "Maquina Nao Existe"
                    }
                  </h1>

                  <hr></hr>
                  
                  {/* ESTADO ATUAL DA MAQUINA */}
                  <h1 className={styles.h1State}>
                    {
                      equipmentStateHistory[equipmentPositionHistory
                          .indexOf(lastLoc)]
                          .states[equipmentStateHistory[equipmentPositionHistory
                          .indexOf(lastLoc)].states.length - 1]
                          .equipmentStateId
                      === equipmentWorking.id
                      ? "Operando"
                      : equipmentStateHistory[equipmentPositionHistory
                          .indexOf(lastLoc)]
                          .states[equipmentStateHistory[equipmentPositionHistory
                          .indexOf(lastLoc)].states.length - 1]
                          .equipmentStateId 
                          === equipmentStopped.id
                          ? "Parado"
                          : "Manutenção"
                    }
                  </h1>

                </Popup>
              </Marker>
            ))
          }

        </MapContainer>
      </div>
    </>
  )
}