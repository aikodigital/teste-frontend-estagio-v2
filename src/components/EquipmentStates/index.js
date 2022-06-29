import * as S from './styled';
import dataExtract from '../../dataExtract';
import equipmentStateHistory from '../../assets/data/equipmentStateHistory.json';


function EquipmentStates ({name, id}) {
	
	const filter = equipmentStateHistory.filter(equipmentStateHistory => equipmentStateHistory.equipmentId === id)

	return (
		<S.WrapperStates>
			<h1>Histórico de estados </h1>
			<h2> Equipamento: {name} </h2>
			

			{filter.map((filter) => (
				filter.states.map((states, i) => (
					<div key={i} >
						<p> <b>Data:</b> {new Date(states.date).toLocaleString()} </p>
						<p> <b>Estado:</b>  {dataExtract().handleStateName(states.equipmentStateId)} </p>
					</div>


				))

			))}
			
			

		</S.WrapperStates>
	);
}

export default EquipmentStates;
