import { useState } from "react";
import { Card, Tab } from "react-bootstrap";
import useGetEarningCalculatorById from "../hooks/getEarningCalculatorById";
import useGetModel from "../hooks/getModel";
import useGetPositionById from "../hooks/getPositionById";
import useGetProductivityPercentageById from "../hooks/getProductivityPercentageById";
import useGetStateById from "../hooks/getStateById";
import useGetStatusClassById from "../hooks/getStatusClassById";
import formatStringDate from "../utils/formatStringDate";

function TabPane({ id, name }: any) {

  const [equipment, useEquipment] = useState(require("../data/equipment.json"));
  const [equipmentModel, setEquipamentModel] = useState(
    require("../data/equipmentModel.json")
  );
  const [equipmentPositionHistory, setEquipmentPositionHistory] = useState(
    require("../data/equipmentPositionHistory.json")
  );
  const [equipmentStateHistory, setEquipmentStateHistory] = useState(
    require("../data/equipmentStateHistory.json")
  );
  const [equipmentState, setEquipmentState] = useState(
    require("../data/equipmentState.json")
  );

  return (
<Tab.Pane eventKey={id}>
  <Card style={{ width: '100%' }} bg="light" text="dark" border="info" as="div">
    <Card.Body>
      <div className="flex">
        <p>
          <Card.Title>{`Name: ${name}`}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{`Modelo: ${useGetModel(id, equipment, equipmentModel).map((e:any) => e.name)}`}</Card.Subtitle>
        </p>
        <span className="material-symbols-outlined" style={{fontSize: '42px', marginBottom: '16px'}}>
        event_note
        </span>
      </div>
    <Card.Text style={{paddingTop: "8px"}}>
      <div className="flex">
        <p>
            {`Percentual de Produtividade: ${useGetProductivityPercentageById(id, equipment, equipmentModel, equipmentStateHistory).replace('.', ',')}%`}
          </p>
          <p>
            {`Ganhos Gerados: R$${useGetEarningCalculatorById(id, equipmentModel, equipmentStateHistory, equipment).toFixed(2).replace('.', ',')}`}
          </p>
      </div>
        <div className="flex">
          <p>
            {`Posição Atual: ${useGetPositionById(id, equipmentPositionHistory).map((e:any) => `${e.position.lat}, ${e.position.lon}`)}`}
          </p>
          <p>
            {`Última Atualização: ${useGetPositionById(id, equipmentPositionHistory).map((e:any) => formatStringDate(e.date))}`}
            </p>
        </div>
        <div className="flex">
            <p>
              {`Status: `}
              <span className={`circle-dot ${useGetStatusClassById(id, equipmentStateHistory, equipmentState)}`}></span>
              {`${useGetStateById(id, equipmentStateHistory, equipmentState).map((e: any) => e.state.map((e:any) => e.name))}`}
            </p>
            <p>
              {`Última Atualização: ${useGetStateById(id, equipmentStateHistory, equipmentState).map((e: any) => formatStringDate(e.date))}`}
            </p>
        </div>
    </Card.Text>
  </Card.Body>
</Card>
</Tab.Pane>
  );
}

export default TabPane;
