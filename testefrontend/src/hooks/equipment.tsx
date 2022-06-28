import { 
    createContext, 
    ReactNode, 
    useState,
    useEffect,
    useContext 
} from "react";

import equipment from '../data/equipment.json';
import equipmentModel from '../data/equipmentModel.json';
import equipmentPositionHistory from '../data/equipmentPositionHistory.json';
import equipmentState from '../data/equipmentState.json';
import equipmentStateHistory from '../data/equipmentStateHistory.json';
 
import { 
    Equipment,
    DesiredEquipmentProps,
    DesiredEquipmentHistoryList,
    EquipmentContextData
} from '../interfaces';

import {
    findMostRecentTime,
    formatNumber
} from '../utils';
 
interface EquipmentProviderProps {
   children: ReactNode;
}
 
export const EquipmentContext = createContext({} as EquipmentContextData);
 
function EquipmentProvider({ children }: EquipmentProviderProps){
    const [equipmentList, setEquipmentList] = useState<DesiredEquipmentProps[]>([]);
    const [desiredEquipmentHistoryList, setDesiredEquipmentHistoryList] = useState<DesiredEquipmentHistoryList[]>([]);

    function showEquipments(equipmentList: Equipment[]){
        const equipments = [] as DesiredEquipmentProps[];

        for(let i = 0; i < equipmentList.length; i++){
            const findEquipment = equipmentList[i];
            const findEquipmentName = findEquipment.name;
            
            const findEquipmentModelName = equipmentModel.find((element) => element.id === findEquipment.equipmentModelId)!.name;
            const findEquipmentPositions = equipmentPositionHistory.find((element) => element.equipmentId === findEquipment.id)!.positions;
            const findEquipmentStates = equipmentStateHistory.find((element) => element.equipmentId === findEquipment.id)!.states;

            const findMostRecentEquipmentPositionTime = findMostRecentTime(findEquipmentPositions);
            const findMostRecentEquipmentStateTime = findMostRecentTime(findEquipmentStates);

            const findMostRecentEquipmentPosition = findEquipmentPositions.find((element) => element.date === new Date(findMostRecentEquipmentPositionTime).toISOString())!;
            const findMostRecentEquipmentState = findEquipmentStates.find((element) => element.date === new Date(findMostRecentEquipmentStateTime).toISOString());

            const findMostRecentEquipmentStateName = equipmentState.find((element) => element.id === findMostRecentEquipmentState!.equipmentStateId)!.name;
            const findMostRecentEquipmentStateColor = equipmentState.find((element) => element.id === findMostRecentEquipmentState!.equipmentStateId)!.color;

            let formattedEquipment = {
                id: findEquipment.id,
                name: findEquipmentName,
                modelName: findEquipmentModelName,
                positionInformation: findMostRecentEquipmentPosition,
                stateInformation: {
                    name: findMostRecentEquipmentStateName,
                    color: findMostRecentEquipmentStateColor
                }
            };

            equipments.push(formattedEquipment);
        }

        setEquipmentList(equipments);  
    }

    function checkEquipmentStateHistory(equipmentId: string){
        const currentEquipmentStateHistoryList = [];

        const currentEquipmentName = equipment.find((element) => element.id === equipmentId)!.name;

        const currentEquipmentStateHistory = equipmentStateHistory.find((element) => element.equipmentId === equipmentId)!.states;

        for(var i = 0; i < currentEquipmentStateHistory.length; i++){
            const id = currentEquipmentStateHistory[i].date;
            const date = new Date(currentEquipmentStateHistory[i].date);

            const dateDay = formatNumber(date.getDate().toString());
            const dateMonth = formatNumber((date.getMonth() + 1).toString());
            const dateYear = date.getFullYear();
            const dateHour = formatNumber(date.getHours().toString());
            const dateMinute = formatNumber(date.getMinutes().toString());

            const currentEquipmentFormattedDate = `${dateDay}/${dateMonth}/${dateYear}`;
            const currentEquipmentFormattedTime = `${dateHour}:${dateMinute}`;
            
            const desiredCurrentEquipmentStateHistoryElement = currentEquipmentStateHistory[i];

            const currentEquipmentState = equipmentState.find((element) => element.id === desiredCurrentEquipmentStateHistoryElement.equipmentStateId)!.name;
            const currentEquipmentStateColor =  equipmentState.find((element) => element.id === desiredCurrentEquipmentStateHistoryElement.equipmentStateId)!.color;

            const currentEquipment = {
                id,
                name: currentEquipmentName,
                date: currentEquipmentFormattedDate,
                time: currentEquipmentFormattedTime,
                state: currentEquipmentState,
                color: currentEquipmentStateColor
            }

            currentEquipmentStateHistoryList.push(currentEquipment);
        }

        setDesiredEquipmentHistoryList(currentEquipmentStateHistoryList);
    }

    function filterEquipments(desiredEquipmentModel: string){
        if(desiredEquipmentModel === ''){
            showEquipments(equipment);
            return;
        }

        const filterEquipmentModelId = equipmentModel.find((element) => element.name === desiredEquipmentModel)!.id;
        const filterEquipments = equipment.filter((element) => element.equipmentModelId === filterEquipmentModelId);

        showEquipments(filterEquipments);
    }

    useEffect(() => {
        showEquipments(equipment);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

   return (
       <EquipmentContext.Provider value={{
            equipmentList,
            desiredEquipmentHistoryList,
            checkEquipmentStateHistory,
            filterEquipments
       }} >
           {children}
       </EquipmentContext.Provider>
   )
}
 
function useEquipment(){
   const context = useContext(EquipmentContext);
 
   return context;
}
 
export { EquipmentProvider, useEquipment };