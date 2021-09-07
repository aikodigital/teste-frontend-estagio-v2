import React from "react";
import { Marker, Popup } from "react-leaflet";

import { validateState } from "../../services/api";

import Icon from "../../utils/Icon";
import PopupContent from "../../components/PopupContent";
import TemplateMap from "../../components/TemplateMap";

const Map = ({ state, equipment, width, height }) => {
  return (
    <TemplateMap width={width} height={height}>
      {equipment.positions.map((position, key) => {
        const [validate, details, newDate] = validateState(
          position,
          equipment,
          state
        );

        return (
          validate && (
            <Marker
              key={key}
              position={[position.lat, position.lon]}
              draggable={false}
              animate={true}
              icon={Icon(equipment.model.name)}
            >
              <Popup>
                <PopupContent
                  equipment={equipment}
                  details={details}
                  date={newDate}
                />
              </Popup>
            </Marker>
          )
        );
      })}
    </TemplateMap>
  );
};

export default Map;
