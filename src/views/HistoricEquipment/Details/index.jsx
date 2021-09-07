import React from "react";

import api from "../../../services/api";

import checked from "../../../assets/img/checked.png";
import cancel from "../../../assets/img/cancel.png";

import { SelectEquip } from "../../../components/Filters";
import { Container, Header, Content, Earnings } from "./style";

const getState = (earning) => {
  return api.getEquipmentStateId(earning.equipmentStateId);
};

const numberCurrency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const convertToInt = (value) => {
  return numberCurrency.format(Math.abs(value));
};

const Details = ({ equipment, currentId, changeEquip }) => {
  const [hoursOperaning, valueOperaning] = api.getTotalHoursOperaning(
    equipment.id,
    equipment.model.id
  );
  const totalOperaning = hoursOperaning * valueOperaning;

  const [hoursStopped, valueStopped] = api.getTotalHoursStop(
    equipment.id,
    equipment.model.id
  );
  const totalStopped = hoursStopped * valueStopped;

  const [hoursMaintanence, valueMaintanence] = api.getTotalHoursMaintenence(
    equipment.id,
    equipment.model.id
  );
  const totalMaintanence = hoursMaintanence * valueMaintanence;

  const totalHours = hoursOperaning + hoursStopped + hoursMaintanence;

  const totalValue = totalOperaning + totalStopped + totalMaintanence;

  return (
    <Container>
      <Header>
        <SelectEquip equip={currentId} changeEquip={changeEquip} />
        <title>
          <span>{equipment.model.name}</span>
        </title>
      </Header>
      <Content>
        <Earnings>
          <h2>Ganhos por hora do equipamento</h2>
          {equipment.model.hourlyEarnings.map((earning, key) => {
            const state = getState(earning);
            const value = convertToInt(earning.value);
            const icon = earning.value > 0 ? checked : cancel;
            return (
              <div key={key}>
                <label htmlFor="">{state.name}: </label>
                <span>
                  {earning.value < 0 ? "Prejuizo de " : "Ganho de "}
                  {value}
                  <img src={icon} alt="icon" />
                </span>
              </div>
            );
          })}
        </Earnings>
        <Earnings>
          <h2>Faturamento total do equipamento</h2>
          <div>
            <p>Total de horas operando: {hoursOperaning} horas</p>
            <p>Ganho total operando: {convertToInt(totalOperaning)}</p>
          </div>
          <div>
            <p>Total de horas parado: {hoursStopped} horas</p>
            <p>Prejuizo total parado: {convertToInt(totalStopped)}</p>
          </div>
          <div>
            <p>Total de horas manutenção: {hoursMaintanence} horas</p>
            <p>Valor total da manutenção: {convertToInt(totalMaintanence)}</p>
          </div>
          <div>
            <p>Total de horas do equipamento: {totalHours} horas</p>
            <p>Valor final: {convertToInt(totalValue)}</p>
          </div>
        </Earnings>
      </Content>
    </Container>
  );
};

export default Details;
