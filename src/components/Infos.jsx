import styles from '../components/Infos.module.css'
import { GrFormClose } from 'react-icons/gr'

import stateHistory from '../data/equipmentStateHistory.json'
import states from '../data/equipmentState.json'

var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
var mesesISO = ['Jan', 'Feb', 'Mar', 'Apr','May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

function Infos(props) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p onClick={() => props.click(null, 0)}><GrFormClose/></p>
                <h3>Historico de Estados:</h3>
            </div>
            <hr/>
            <div className={styles.id}>
                <h5>ID do equipamento: </h5>
                <p>{props.id}</p>
            </div>
            <hr/>
            <div className={styles.historico}>
                {
                    stateHistory.map( value => {
                        if(value.equipmentId === props.id){
                            var statesInverse =  value.states.slice(0).reverse();
                            return statesInverse.map( state => {
                                var index = states.findIndex(stateid => stateid.id === state.equipmentStateId);
                                
                                var data = state.date.split('T')[0].split('-');
                                var hora = state.date.split('T')[1].split(':');
                                var mes = meses.at(mesesISO.findIndex(m => m == data[1]))
                                return (
                                    <div>
                                        <p>{data[2] + ' de ' + mes + ' de ' + data[0] + ' - ' + hora[0] + ':' + hora[1]}</p>
                                        <p key={state.date}>Status: <span>{states.at(index).name}</span></p>
                                    </div>
                                )
                            })
                        }
                    })
                }
            </div>
        </div>
    );
}

/*stateHistory.map( value => {
    var lastState = value.states.length - 1;
        if(value.equipmentId === props.equipmentId){
            var index = states.findIndex(state => state.id === value.states.at(lastState).equipmentStateId);
            return (
                <div  className={styles.pop}  key={value.equipmentId}>
                    <p>Status: <span>{states.at(index).name}</span></p>
                    <p onClick={() => props.click(value.equipmentId)}>click</p>
                </div>
            )
        }
})*/

export default Infos;