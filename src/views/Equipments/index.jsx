import React, { useState, useEffect, useCallback } from "react";

import api from "../../services/api";

import Map from "./Map";
import Modal from "../../components/Modal";
import ContentModal from "./ContentModal";
import InfoMap from "../../components/InfoMap";
import settings from "../../assets/img/settings.png";
import { Container, Content } from "./style";

const Equipments = () => {
  const [equipments, setEquipments] = useState(null);
  const [showModal, setShowModal] = useState();

  const [state, setState] = useState('1');
  const [model, setModel] = useState('1');

  const changeState = useCallback((e) => {
    let stateId = e.target.value;
    setState(stateId);
    setShowModal(false);
  }, [setState]);
  
  const changeModel = useCallback((e) => {
    let modelId = e.target.value;
    setModel(modelId);
    setShowModal(false);
  }, [setModel]);

  useEffect(() => {
    const equipments = api.getEquipment();
    equipments.forEach((equip) => {
      equip.model = api.getEquipmentModelById(equip.equipmentModelId);
      equip.positions = api.getEquipmentHistoryById(equip.id)[0].positions;
    });
    setEquipments(equipments);
  }, [equipments]);

  return (
    <>
      {equipments && (
        <Container>
          <Content>
            <div className="header">
              <h1>Todas localizações dos equipamentos</h1>
              <i onClick={() => setShowModal(true)}>
                <img id="settings" src={settings} alt="icon-config" />
              </i>
              <InfoMap direction={"row"} />
            </div>
            <Map equipments={equipments} width={80} height={65} state={state} model={model} />
          </Content>
        </Container>
      )}
      <Modal isVisible={showModal} closeModal={() => setShowModal(false)}>
        <ContentModal state={state} changeState={changeState} model={model} changeModel={changeModel}/>
      </Modal>
    </>
  );
};

export default Equipments;
