import { EquipmentState } from '../interfaces/EquipmentState';
import equipments from '../mock/equipment.json';
import equipmentsModels from '../mock/equipmentModel.json';
import equipmentsPositionHistory from '../mock/equipmentPositionHistory.json';
import equipmentsState from '../mock/equipmentState.json';
import equipmentsStateHistory from '../mock/equipmentStateHistory.json';

class EquipmentsService {
  public fetchAllEquipments() {
    return equipments;
  }
  public getById(id: string) {
    const equipment = equipments.find((equipment) => equipment.id == id);
    if (equipment) {
      return equipment;
    } else {
      throw new Error('Equipment not found');
    }
  }

  public getLastPosition(equipmentId: string) {
    const equipment = equipmentsPositionHistory.find(
      (item) => item.equipmentId === equipmentId
    );
    if (equipment) {
      return equipment.positions.sort((a, b) => (a.date < b.date ? 1 : -1))[0];
    } else {
      throw new Error('Equipment not found');
    }
  }
  public getModel(equipmentModelId: string) {
    const equipmentModel = equipmentsModels.find(
      (equipment) => equipment.id === equipmentModelId
    );
    if (equipmentModel) {
      return equipmentModel;
    } else {
      throw new Error('Equipment model not found');
    }
  }
  public getEquipmentState(equipmentId: string) {
    const equipment = equipmentsStateHistory.find(
      (equipment) => equipment.equipmentId == equipmentId
    );
    const equipmentStateArr: EquipmentState[] = [];
    if (equipment) {
      equipment.states.map((item) => {
        equipmentsState.map(
          (equipmentState) =>
            item.equipmentStateId === equipmentState.id &&
            equipmentStateArr.push({
              name: equipmentState.name,
              color: equipmentState.color,
              date: item.date,
            })
        );
      });
      return equipmentStateArr.reverse();
    } else {
      throw new Error('Equipment not found');
    }
  }
  public getEquipmentStateHistory(equipmentId: string) {
    return equipmentsStateHistory.find(
      (equipment) => equipment.equipmentId === equipmentId
    );
  }
  public getEquipmentPositionHistory(equipmentId: string) {
    return equipmentsPositionHistory.find(
      (equipment) => equipment.equipmentId === equipmentId
    );
  }
  public getEquipmentProductivity(equipmentId: string) {
    const equipmentStateHistory = this.getEquipmentStateHistory(equipmentId);
    const operatorStateId = '0808344c-454b-4c36-89e8-d7687e692d57';
    let workedHours = 0;
    let workedDays = 0;
    if (equipmentStateHistory) {
      equipmentStateHistory.states.map((stateHistory) => {
        if (stateHistory.equipmentStateId === operatorStateId) {
          workedHours += new Date(stateHistory.date).getHours();
          workedDays += 1;
        }
      });
    }

    return ((workedHours / (24 * workedDays)) * 100).toFixed(2);
  }
  public getWorkedHours(
    equipmentId: string,
    state: 'Operando' | 'Parado' | 'Manutenção'
  ) {
    const equipmentStateHistory = this.getEquipmentState(equipmentId);
    return equipmentStateHistory.filter((equipment) => equipment.name === state)
      .length;
  }
  public getEquipmentEarn(equipmentModelId: string, equipmentId: string) {
    const equipmentModel = this.getModel(equipmentModelId);
    const operationHours = this.getWorkedHours(equipmentId, 'Operando');
    const maintenanceHours = this.getWorkedHours(equipmentId, 'Manutenção');
    const stoppedHours = this.getWorkedHours(equipmentId, 'Parado');

    const earnedEquipmentTotal =
      equipmentModel.hourlyEarnings[0].value * operationHours +
      equipmentModel.hourlyEarnings[1].value * stoppedHours +
      equipmentModel.hourlyEarnings[2].value * maintenanceHours;

    return earnedEquipmentTotal;
  }
}

export default new EquipmentsService();
