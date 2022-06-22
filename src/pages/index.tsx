import type { NextPage } from "next";
import { EquipmentCard } from "../components/EquipmentCard";
import equipments from "../../data/equipment.json";
import equipmentModels from "../../data/equipmentModel.json";
import equipmentPositionHistory from "../../data/equipmentPositionHistory.json";
import equipmentState from "../../data/equipmentState.json";
import equipmentStateHistory from "../../data/equipmentStateHistory.json";

const Home: NextPage = () => {
  console.log(equipments);

  function flatData() {
    const items = equipments.map((equipment) => {
      const model = equipmentModels.find((models) => {
        return models.id === equipment.equipmentModelId;
      });
      const positionHistory = equipmentPositionHistory.find((history) => {
        return history.equipmentId === equipment.id;
      });
      const rawStateHistory = equipmentStateHistory.find((equipState) => {
        return equipState.equipmentId === equipment.id;
      });
      const stateHistory = rawStateHistory?.states.map((state) => {
        const stateInfo = equipmentState.find((stateData) => {
          return stateData.id === state.equipmentStateId;
        });

        return stateInfo;
      });

      return {
        id: equipment.id,
        name: equipment.name,
        model,
        positionHistory,
        stateHistory,
      };
    });

    console.log(items);
  }

  flatData();

  return (
    <div>
      <h1>Hello</h1>
      <EquipmentCard color="yellow" />
    </div>
  );
};

export default Home;
