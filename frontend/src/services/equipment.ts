import equipment from "../../../data/equipment.json";
import equipmentModel from "../../../data/equipmentModel.json";
import equipmentPositionHistory from "../../../data/equipmentPositionHistory.json";
import equipmentState from "../../../data/equipmentState.json";
import equipmentStateHistory from "../../../data/equipmentStateHistory.json";

/* TODO:
  - Get all equipments
  - Get equipment states. Provide equipmentId as parameter
  - Get equipment positions. Provide equipmentId as parameter
*/

/*
  What information i need to show in the map?
    - All equipments in their most recent positions.
      - Each equipment model has a different icon.
      - The equipments must be presented according with their equipment model icon.
      - Each equipment icon must have a different color for different states.
      - When mouse hover the icon, a popup must show the equipment name and his current state.
      
      - When the user clicks the icon, a model must appear on the screen and show the 
        position history of that icon, and, if the user clicks in a position, the map must update,
        showing a new icon in that position, but with less opacity.:
*/

interface EquipmentData {
  id: string;
  equipmentModelId: string;
  name: string;
}

interface EquipmentsModelsData {
  id: string;
  name: string;
  hourlyEarnings: EquipmentModelHourlyEarnings[];
}

interface EquipmentModelHourlyEarnings {
  equipmentStateId: string;
  value: number;
}

interface EquipmentsStatesData {
  id: string;
  name: string;
  color: string;
}

interface EquipmentsStateHistoryData {
  equipmentId: string;
  states: StateHistoryData[];
}

interface StateHistoryData {
  date: string;
  equipmentStateId: string;
}

interface EquipmentsPositionsData {
  equipmentId: string;
  positions: PositionData[];
}

interface PositionData {
  date: string;
  lat: number;
  lon: number;
}
const getEquipmentsPosition = () => {
  // Test

  const equipments = JSON.parse(
    JSON.stringify(equipment) || "{}"
  ) as EquipmentData[];

  const equipmentsModels = JSON.parse(
    JSON.stringify(equipmentModel) || "{}"
  ) as EquipmentsModelsData[];

  const equipmentsStates = JSON.parse(
    JSON.stringify(equipmentState) || "{}"
  ) as EquipmentsStatesData[];

  const equipmentsPositions = JSON.parse(
    JSON.stringify(equipmentPositionHistory) || "{}"
  ) as EquipmentsPositionsData[];

  const updatedEquipmentsModels = equipmentsModels.map((model) => ({
    id: model.id,
    name: model.name,
    hourlyEarnings: model.hourlyEarnings.map((earning) => ({
      equipmentState: equipmentsStates.find(
        (state) => state.id === earning.equipmentStateId
      ),
      value: earning.value
    }))
  }));

  const updatedEquipments = equipments.map((equipment) => ({
    id: equipment.id,
    name: equipment.name,
    model: updatedEquipmentsModels.find(
      (model) => model.id === equipment.equipmentModelId
    )
  }));

  // Update equipments with positions ordered by the most recent
  const updatedEquipmentsPositions = equipmentsPositions.map((equipment) => ({
    equipment: updatedEquipments.find(
      (updatedEquipment) => updatedEquipment.id === equipment.equipmentId
    ),
    positions: equipment.positions.sort(
      (posA, posB) =>
        new Date(posB.date).getTime() - new Date(posA.date).getTime()
    )
  }));

  console.log(updatedEquipmentsPositions);
};

export { getEquipmentsPosition };
