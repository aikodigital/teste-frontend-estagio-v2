import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";

export const Map = ({
  equipmentID,
  equipmentPositionList,
  equipmentStateList,
  equipmentStateHistoryList,
  equipmentList,
}) => {
  const filterEquipmentsPositions = equipmentPositionList.filter((position) => {
    return equipmentID
      ? position.equipmentId == equipmentID
      : position.equipmentId;
  });

  const statePopup = (equipmentId) => {
    const filterStateHistory = equipmentStateHistoryList.filter((state) => {
      return state.equipmentId == equipmentId;
    });
    const filterEquipmentList = equipmentList.filter((equipment) => {
      return equipment.id == equipmentId;
    });

    const mostRecentState =
      filterStateHistory[0].states[filterStateHistory[0].states.length - 1];
    const filterStates = equipmentStateList.filter((state) => {
      return state.id == mostRecentState.equipmentStateId;
    });

    return (
      <Popup>
        {
          <>
            <h4>{filterEquipmentList[0].name}</h4>
            <p>
              Status:
              <span style={{ color: `${filterStates[0].color}` }}>
                {" "}
                {filterStates[0].name}
              </span>
            </p>
          </>
        }
      </Popup>
    );
  };

  const markerPosition = () =>
    filterEquipmentsPositions.map((position) => {
      const mostRecentPosition =
        position.positions[position.positions.length - 1];

      return (
        <Marker
          key={position.equipmentId}
          position={[mostRecentPosition.lat, mostRecentPosition.lon]}
        >
          {statePopup(position.equipmentId)}
        </Marker>
      );
    });

  return (
    <section className={styles.containerMap}>
      <div className={styles.map}>
        <MapContainer
          center={[-19.14906, -46.006754]}
          zoom={9}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          
          {/* <TileLayer
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          /> */}

          {markerPosition()}
        </MapContainer>
      </div>
    </section>
  );
};
