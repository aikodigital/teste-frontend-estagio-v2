import React from "react";
import { Marker, Popup } from "react-leaflet";

import api from "../../services/api";
import Icon from "../../utils/Icon";
import TemplateMap from "../../components/TemplateMap";
import PopupContent from "../../components/PopupContent";

const prepareState = (equipment) => {
  let newDate = new Date(equipment.position.date);
  let currentState = api.getLastStateByEquipmentId(equipment.id);
  let details = currentState
    ? api.getStateById(currentState.equipmentStateId)
    : null;

  return [details, newDate];
};

const Map = ({ equipments, width, height }) => {
  return (
    <TemplateMap width={width} height={height}>
      {equipments.map((equipment, key) => {
        const [details, newDate] = prepareState(equipment);
        return (
          <Marker
            key={key}
            position={[equipment.position.lat, equipment.position.lon]}
            draggable={false}
            animate={true}
            icon={Icon(equipment.model.name)}
          >
            <Popup>
              <PopupContent
                equipment={equipment}
                details={details}
                date={newDate}
                link={true}
              />
            </Popup>
          </Marker>
        );
      })}
    </TemplateMap>
  );
};

export default Map;
