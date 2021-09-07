import React from "react";

import api from "../../services/api";
import { SelectContainer, Filters } from "./style";

export const SelectState = ({ state, changeState }) => {
  const states = api.getEquipmentState();

  return (
    <SelectContainer justify={"center"}>
        <h1> Estado do equipamento </h1>
      <Filters>
        <select name="status" id="status" value={state} onChange={changeState}>
          <option value="1">Todos</option>
          {states.map((state, key) => (
            <option key={key} value={state.id}>
              {state.name}
            </option>
          ))}
        </select>
      </Filters>
    </SelectContainer>
  );
};

export const SelectEquip = ({ equip, changeEquip, all }) => {
  const equips = api.getEquipment();

  return (
    <SelectContainer justify={"center"}>
      <h1> Equipamento </h1>
      <Filters>
        <select name="equip" id="equip" value={equip} onChange={changeEquip}>
          { all && <option value="1">Todos equipamentos</option> }
          {equips.map((equip, key) => (
            <option key={key} value={equip.id}>
              {equip.name}
            </option>
          ))}
        </select>
      </Filters>
    </SelectContainer>
  );
};

export const SelectModel = ({model, changeModel}) => {

  const models = api.getEquipmentModel();

  return (
    <SelectContainer justify={"center"}>
      <h1> Modelo </h1>
      <Filters>
        <select name="equip" id="equip" value={model} onChange={changeModel}>
          <option value="1">Todos Modelos</option>
          {models.map((model, key) => (
            <option key={key} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
      </Filters>
    </SelectContainer>
  );
};