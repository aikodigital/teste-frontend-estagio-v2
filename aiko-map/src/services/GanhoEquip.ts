import equipment from "../data/equipment.json";
import modelEquip from "../data/equipmentModel.json";

interface ISideState{
    name: string,
    equipmentId: string,
    states: {
        date: string,
        equipmentStateId: string
    }[];
  }


export default  function GanhoEquip(obj:ISideState){
    const aux = equipment.find(item => item.id === obj.equipmentId);
    const modelo = modelEquip.find(item => item.id === aux.equipmentModelId);

    const estado1 = modelo.hourlyEarnings.find(item => 
        item.equipmentStateId === "0808344c-454b-4c36-89e8-d7687e692d57");
    const estado2 = modelo.hourlyEarnings.find(item => 
            item.equipmentStateId === "baff9783-84e8-4e01-874b-6fd743b875ad");
    const estado3 = modelo.hourlyEarnings.find(item => 
                item.equipmentStateId === "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f");
    //let valor = 0;
    let valorTotal = 0;
    let intervaloConta = 0;
    const tamanho = obj.states.length;
    
    function MultiPeso(valor,estado){
    
        switch(estado){
            case "0808344c-454b-4c36-89e8-d7687e692d57":
                return valor * estado1.value;
            case "baff9783-84e8-4e01-874b-6fd743b875ad":
                return valor * estado2.value;
            case "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f":
                return valor * estado3.value;

            default: 
             break;
        }

        return null;    
    }
    
    obj.states.map((analise,index) => {
     
        if(index + 1 < tamanho){
            const atual = new Date(analise.date).getHours();
            const proximo = new Date(obj.states[index+1].date).getHours();
            if (atual < proximo) {
                intervaloConta = MultiPeso(proximo - atual,analise.equipmentStateId);
            }
            else{
                intervaloConta = MultiPeso(atual - proximo,analise.equipmentStateId);
            }
        }else{
            intervaloConta = MultiPeso(1, analise.equipmentStateId);
        }
        
        valorTotal = valorTotal + intervaloConta;
        //console.log(valorTotal);
    });
    
    return valorTotal.toFixed(2);
    
}



