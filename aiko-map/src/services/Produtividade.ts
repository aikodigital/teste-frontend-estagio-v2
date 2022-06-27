interface ISideState{
    name: string,
    equipmentId: string,
    states: {
        date: string,
        equipmentStateId: string
    }[];
  }


export default  function Produtividade(obj:ISideState){
    let valor = 0;
    let valorTotal = 0;
    let intervaloConta = 0;
    const tamanho = obj.states.length;
    obj.states.map((analise,index) => {
        //console.log(analise);
        
            //console.log(index);
        if(index + 1 < tamanho){
            const atual = new Date(analise.date).getHours();
            const proximo = new Date(obj.states[index+1].date).getHours();
            if (atual < proximo) {
                intervaloConta = proximo - atual;
            }
            else{
                intervaloConta = atual - proximo;
            }
        }else{
            intervaloConta++;
        }
        if(analise.equipmentStateId == "0808344c-454b-4c36-89e8-d7687e692d57"){
            valor = valor + intervaloConta;
        }
        valorTotal = valorTotal + intervaloConta;
    });
    console.log(valor);
    console.log(obj.states.length);

    return ((valor/valorTotal)*100).toFixed(2);
    
}