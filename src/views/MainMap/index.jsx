import React, { useState, useEffect } from "react";

import { Container, Content } from "./style";

import api from "../../services/api";

import InfoMap from "../../components/InfoMap";
import Map from "./Map";

const MainMap = () => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    const equips = api.getEquipment();
    equips.forEach((equip) => {
      equip.model = api.getEquipmentModelById(equip.equipmentModelId);
      equip.position = api.getLastPositionById(equip.id);
      equip.states = api.getEquipmentStateHistory(equip.id);
    });

    setEquipments(equips);
  }, [equipments]);

  return (
    <Container>
      <Content>
        <div className="header">
          <h1>Última localização dos equipamentos</h1>
          <InfoMap direction={"row"} />
        </div>
        <Map equipments={equipments} width={80} height={65} />
      </Content>
    </Container>
  );
};

export default MainMap;
