import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import usePersistState from "../../utils/usePersistState";
import api from "../../services/api";

import { SelectState } from "../../components/Filters";

import { Container, DivMap } from "./style";

import Map from "./Map";
import Details from "./Details";
import InfoMap from "../../components/InfoMap";
import NotFound from "../NotFound";

const Equipment = ({ history }) => {
  const { id } = useParams();
  const [currentId, setCurrentId] = useState(id);
  const [equipmentState, setEquipmentState] = usePersistState('state', "1");
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    const equip = api.getEquipmentById(currentId);
    if (equip) {
      equip.model = api.getEquipmentModelById(equip.equipmentModelId);
      const positions = api.getEquipmentHistoryById(currentId)[0];
      setEquipment({ ...positions, ...equip });
    }
  }, [currentId]);

  const changeState = useCallback((e) => {
    let stateId = e.target.value;
    setEquipmentState(stateId);
  }, [setEquipmentState]);

  const changeEquip = useCallback((e) => {
    let equipId = e.target.value;
    setCurrentId(equipId);
    history.push(`/equipment/${equipId}`);
  }, [setCurrentId, history]);

  return (
    <>
      {equipment ? (
        <Container>
          <Details equipment={equipment} changeEquip={changeEquip} currentId={currentId} />
          <DivMap>
            <SelectState state={equipmentState} changeState={changeState}/>
              <h1 className="title">Histórico de posição do equipamento</h1>
            <Map
              state={equipmentState}
              equipment={equipment}
              width={58}
              height={40}
            />
            <InfoMap />
          </DivMap>
        </Container>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Equipment;
