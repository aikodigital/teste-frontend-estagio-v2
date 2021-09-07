import React from "react";

import api from "../../services/api";

import { Container, Item } from "./style";

import markerRed from "../../assets/svg/marker-red.svg";
import markerBlue from "../../assets/svg/marker-blue.svg";
import markerYellow from "../../assets/svg/marker-yellow.svg";

const InfoMap = ({ direction }) => {
  const equipmentModels = api.getEquipmentModel();
  const equipmentState = api.getEquipmentState();

  const chooseMarker = (modelName) => {
    switch (modelName) {
      case "Caminhão de carga":
        return markerRed;
      case "Harvester":
        return markerBlue;
      case "Garra traçadora":
        return markerYellow;
      default:
        break;
    }
  };

  return (
    <Container direction={direction ?? "column"}>
      <div>
        <h2>Modelo do equipamento</h2>
        <Item>
          {equipmentModels.map((model, key) => {
            return (
              <div key={key}>
                <h3> {model.name} </h3>
                <img className="marker" src={chooseMarker(model.name)} alt="marker" />
              </div>
            );
          })}
        </Item>
      </div>
      <div>
        <h2>Estado do equipamento</h2>
        <Item>
          {equipmentState.map((state, key) => {
            return (
              <div key={key}>
                <h3> {state.name} </h3>
                <div style={{ backgroundColor: state.color }}></div>
              </div>
            );
          })}
        </Item>
      </div>
    </Container>
  );
};

export default InfoMap;
