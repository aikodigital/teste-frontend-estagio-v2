import React from "react";
import { Marker, Popup } from "react-leaflet";

import { validateState } from "../../services/api";

import Icon from "../../utils/Icon";
import PopupContent from "../../components/PopupContent";
import TemplateMap from "../../components/TemplateMap";

const validateModel= (validate, currentModel, model) => {
  if(validate){
    if(currentModel === '1'){
      return true;
    }
    return model.id === currentModel;
  }else{
    return false;
  }
};

const Map = ({ equipments, width, height, state, model }) => {
  return (
    <TemplateMap width={width} height={height}>
      {equipments.map((equipment) => {
        return equipment.positions.map((position, key) => {
          const [validate, details, newDate] = validateState(
            position,
            equipment,
            state
          );
          const xValidate = validateModel(validate, model, equipment.model)
          return (
            xValidate && (
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
                    link={true}
                  />
                </Popup>
              </Marker>
            )
          );  
        });
      })}
    </TemplateMap>
  );
};

export default Map;
