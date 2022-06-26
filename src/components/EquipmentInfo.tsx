import { useParams } from 'react-router-dom';
import { format, isAfter, isBefore } from 'date-fns';
import { useState } from 'react';
import { Eye, EyeSlash, SortAscending, SortDescending } from 'phosphor-react';
import equipments from '../../data/equipment.json'
import allEquipmentStateHistory from '../../data/equipmentStateHistory.json'
import equipmentState from '../../data/equipmentState.json'
import equipmentModels from '../../data/equipmentModel.json'
import allEquipmentPositionHistory from '../../data/equipmentPositionHistory.json'


type EquipmentStateType = {
  date: string,
  equipmentStateId: string,
}

type EquipmentModelType = {
  id: string,
  name: string,
  hourlyEarnings: {
    equipmentStateId: string,
    value: number,
  }[],
}

function equipmentProfitFunction(equipmentStates: EquipmentStateType[], equipmentModel: EquipmentModelType) {
  let profit = 0;

  for(let i = 0; i < equipmentStates.length; i++) {
    const dateAfter = i + 1 < equipmentStates.length ? new Date(equipmentStates[i + 1].date) : new Date();
    const time = dateAfter.getTime() - new Date(equipmentStates[i].date).getTime();
    const timeInHours = Math.floor(time / 60 / 60 / 1000);
    const earningsByState = equipmentModel.hourlyEarnings.filter(earning => earning.equipmentStateId == equipmentStates[i].equipmentStateId)[0];
    profit += (earningsByState.value * timeInHours);
  }

  return profit;
}

function equipmentLast30DaysProfitFunction(equipmentStates: EquipmentStateType[], equipmentModel: EquipmentModelType) {
  let date30DaysAgo = new Date(new Date().setDate(new Date().getDate() - 30));
  let firstDate = new Date(equipmentStates[0].date);
  let profit = 0;

  if(equipmentStates.length == 1 && firstDate < date30DaysAgo) {
    var earningsByState = equipmentModel.hourlyEarnings.filter(earning => earning.equipmentStateId == equipmentStates[0].equipmentStateId)[0];
    var time = new Date().getTime() - date30DaysAgo.getTime();
    var timeInHours = Math.floor(time / 60 / 60 / 1000);
    profit += (earningsByState.value * timeInHours);

    return profit;
  }

  for(let i = 0; i < equipmentStates.length; i++) {
    const dateAfter = i + 1 < equipmentStates.length ? new Date(equipmentStates[i + 1].date) : new Date();
    var time = dateAfter.getTime() - new Date(equipmentStates[i].date).getTime();
    var timeInHours = Math.floor(time / 60 / 60 / 1000);
    var earningsByState = equipmentModel.hourlyEarnings.filter(earning => earning.equipmentStateId == equipmentStates[i].equipmentStateId)[0];
    profit += (earningsByState.value * timeInHours);
  }

  return profit;
}

function EquipmentInfo() {
  const [ equipmentInfoVisible, setEquipmentInfoVisible ] = useState(true);
  const [ productivityVisible, setProductivityVisible ] = useState(false);
  const [ stateHistoryVisible, setStateHistoryVisible ] = useState(false);
  const [ order, setOrder ] = useState('newest');
  const { equipmentId, equipmentPositionDate } = useParams()
  const equipment = equipments.filter(equipment => equipment.id == equipmentId)[0]
  const equipmentModel = equipmentModels.filter(model => model.id == equipment.equipmentModelId)[0]
  const equipmentStates = allEquipmentStateHistory.filter(state => state.equipmentId == equipmentId)[0].states;
  const lastEquipmentState = equipmentStates[equipmentStates.length - 1];
  const lastEquipmentStateName = equipmentState.filter(state => state.id == lastEquipmentState.equipmentStateId)[0].name;
  const orderFunction = order == 'oldest' ? isAfter : isBefore;
  const orderedEquipmentStateList = equipmentStates.slice(0).sort((a, b) => { return orderFunction(new Date(a.date), new Date(b.date)) ? 1 : -1})
  const equipmentPositions = allEquipmentPositionHistory.filter(eq => eq.equipmentId == equipment.id)[0]
  const equipmentPosition = equipmentId && equipmentPositionDate && equipmentPositions.positions.filter(pos => pos.date == equipmentPositionDate)[0] ? equipmentPositions.positions.filter(pos => pos.date == equipmentPositionDate)[0] : equipmentPositions.positions[equipmentPositions.positions.length - 1];

  const last30DaysEquipmentStates = equipmentStates.filter(state => {
    let date30DaysAgo = new Date(new Date().setDate(new Date().getDate() - 30));
    return new Date(state.date).getTime() > date30DaysAgo.getTime() ? true : false
  })

  const equipmentProfit = {
    "allTime": equipmentProfitFunction(equipmentStates, equipmentModel),
    "last30Days": equipmentLast30DaysProfitFunction(last30DaysEquipmentStates.length < 1 ? [equipmentStates[equipmentStates.length - 1]] : last30DaysEquipmentStates, equipmentModel),
  }

  return (
    <aside className="flex flex-col h-screen p-6 border-l border-gray-500 overflow-clip animate-fadeIn">
        <span className="flex justify-between gap-2 mt-4 text-lg font-bold ">
          Informações do Equipamento
          <div>
            {equipmentInfoVisible ? <EyeSlash weight="bold" className="inline ml-2 transition hover:scale-110" onClick={() => {setEquipmentInfoVisible(false)}} /> : <Eye weight="bold" className="inline ml-2 transition hover:scale-110" onClick={() => {setEquipmentInfoVisible(true)}} />}
          </div>
        </span>

        <div className="mx-2" style={equipmentInfoVisible ? {display: 'block'} : {display: 'none'}}>
          <span className="font-bold">Nome:</span> {equipment.name}
          <br />
          <span className="font-bold">Modelo:</span> {equipmentModel.name}
          <br />
          <span className="font-bold">Estado atual:</span> {lastEquipmentStateName}
          <br />
          <span className="font-bold">Última alteração:</span>
          <div className="ml-1">
            {format(new Date(equipmentPosition.date), "dd'/'MM'/'yyyy HH':'mm")} <span className="text-xs text-gray-500">(localização)</span>
            <br />
            {format(new Date(lastEquipmentState.date), "dd'/'MM'/'yyyy HH':'mm")} <span className="text-xs text-gray-500">(estado)</span>
          </div>
        </div>

        <span className="flex justify-between gap-2 mt-4 text-lg font-bold ">
          Produtividade
          <div>
            {productivityVisible ? <EyeSlash weight="bold" className="inline ml-2 transition hover:scale-110" onClick={() => {setProductivityVisible(false)}} /> : <Eye weight="bold" className="inline ml-2 transition hover:scale-110" onClick={() => {setProductivityVisible(true)}} />}
          </div>
        </span>

        <div className="mx-2" style={productivityVisible ? {display: 'block'} : {display: 'none'}}>
          <div>
            <span className="font-semibold">Ganho:</span> 
            <div className="mx-2">
              R$ {equipmentProfit.last30Days.toLocaleString('pt-br', {minimumFractionDigits: 2})}  <span className="text-xs text-gray-500">(30 dias)</span>
              <br />
              R$ {equipmentProfit.allTime.toLocaleString('pt-br', {minimumFractionDigits: 2})}  <span className="text-xs text-gray-500">(total)</span>
            </div>
          </div>
          <div>
            <span className="font-semibold">Percentual de Produtividade:</span> 
            <div className="mx-2">
              {equipment.name}  <span className="text-xs text-gray-500">(30 dias)</span>
              <br />
              {equipment.name}  <span className="text-xs text-gray-500">(total)</span>
            </div>
          </div>
        </div>

        <span className="flex justify-between gap-2 mt-4 mb-1 text-lg font-bold ">
          Histórico de Estados
          <div>
            {stateHistoryVisible ? (order == 'newest' ? <SortAscending weight="bold" className="inline ml-2 transition hover:scale-110" onClick={() => {setOrder('oldest')}} /> : <SortDescending weight="bold" className="inline ml-2 transition hover:scale-110" onClick={() => {setOrder('newest')}} />) : null}
            {stateHistoryVisible ? <EyeSlash weight="bold" className="inline ml-2 transition hover:scale-110" onClick={() => {setStateHistoryVisible(false)}} /> : <Eye weight="bold" className="inline ml-2 transition hover:scale-110" onClick={() => {setStateHistoryVisible(true)}} />}
          </div>
        </span>

        <div className="px-4 overflow-y-scroll" style={stateHistoryVisible ? {display: 'block'} : {display: 'none'}}>
          {orderedEquipmentStateList.map(state => {
            const { name, color } = equipmentState.filter(state2 => state2.id == state.equipmentStateId)[0];
            return <span key={state.date} className="flex items-end justify-between text-sm">
              <span style={{color}}>
                {name}
              </span>

              <span className="text-xs text-gray-500">
                {format(new Date(state.date), "dd'/'MM'/'yyyy HH':'mm")}
              </span>
            </span>
          })}
        </div>


    </aside>
  )
}
  
export default EquipmentInfo
  