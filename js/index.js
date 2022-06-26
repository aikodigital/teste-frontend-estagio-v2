function initMap()
{
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: { lat: -19.310857532876746, lng: -46.05163714278332}
    });

    let promise = reqStateHistory_e_state_e_cord();
    promise.then(function(historyState_E_StateArray_e_cord)
    {
        
        let stateEquip = stateHistory(historyState_E_StateArray_e_cord[0], historyState_E_StateArray_e_cord[1]);
        let posicaoEquip = posicaoRecente(historyState_E_StateArray_e_cord[2]);
        
        
        /****** uni o array stateEquip no array posicaoEquip *********/
        for (let i = 0; i < posicaoEquip.length; i++) {
            const idEquip = posicaoEquip[i][1];

            for (let j = 0; j < stateEquip.length; j++) {
              const idEquipState = stateEquip[j][0];

              if(idEquip === idEquipState){
                  //pega o estado do quipamento; ex: parado, manutencao; e pega a cor
                  posicaoEquip[i].push(stateEquip[j][1],stateEquip[j][2]);
                  break;
              }
              
            }
        }
        /********** fim ********** */
        posicaoEquip.forEach(([position,idEquip,state,color]) =>{
          
            let estados = buscaTodosHistoryState(idEquip);//todos os estados do equipamento
            let stateHistory = "";
            stateHistory += "<div> <h1>Historico</h1>";
            stateHistory += `<h5>Id do equipamento: ${idEquip}</h5>`;
            for (let i = 0; i < estados.length; i++) {
                let data = new Date(estados[i][0]);
                
                stateHistory += "data: "+data+" | estado: "+estados[i][1];
                stateHistory += "<br>";
            }
            stateHistory += "</div>";
            
            const contentString = `<div style="color:${color};">${state}</div>`
            /*** janela no box do evento mouseover *****/
            const infowindow = new google.maps.InfoWindow({
              content: contentString,
            });
            /**** fim  */

            /*** janela no box do evento click *****/
            const infowindow2 = new google.maps.InfoWindow({
              content: stateHistory,
            });
            /**** fim ****/
            const marker = new google.maps.Marker({
              position,
              map: map,
            });
            marker.addListener("mouseover", () => {
              infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
              });
            });

            marker.addListener("click", () => {
              infowindow2.open({
                anchor: marker,
                map,
                shouldFocus: false,
              });
            });
        });
        /********* retorna todos os estados de um unico equipamento ************/
        function buscaTodosHistoryState(idEquip){
          let historyStateEquipArray = historyState_E_StateArray_e_cord[0]; 
          let statesEquip = [];
          for (let i = 0; i < historyStateEquipArray.length; i++) {
              
              if(historyStateEquipArray[i].equipmentId == idEquip){
                //coloca estados e data no array
                  for (let j = 0; j < historyStateEquipArray[i].states.length; j++) {
                    let dataEquip = historyStateEquipArray[i].states[j].date;
                    let idState = historyStateEquipArray[i].states[j].equipmentStateId;
                    let estado = estadoEquip(idState);//parado,manutencao etc
                    statesEquip.push([dataEquip,estado]);
                  }
              }
            
          }
          return statesEquip;
        }
        //retorna o estado 
        function estadoEquip(idState){
          let stateArray = historyState_E_StateArray_e_cord[1];
          for (let i = 0; i < stateArray.length; i++) {
              if(stateArray[i].id == idState){
                return stateArray[i].name;
              }
          }
        }
      /******** fim ********* */
    });
    
    async function reqStateHistory_e_state_e_cord(){
      let reqStateHistory = await fetch("http://localhost/teste-frontend-estagio-v2/data/equipmentStateHistory.json");
      let jsonStateHistory = await reqStateHistory.json();
      
      let reqState = await fetch("http://localhost/teste-frontend-estagio-v2/data/equipmentState.json");
      let jsonState = await reqState.json();

      let reqCord = await fetch("http://localhost/teste-frontend-estagio-v2/data/equipmentPositionHistory.json");
      let jsonCord = await reqCord.json();
      
      return [jsonStateHistory,jsonState,jsonCord];
    }
    function stateHistory(stateHistory,state)
    {
        let firstDate = "";
        let firstEquipamentoId = "";
        let firstColorState = "";
        let firstNameState = "";
        let stateEquip = [];
        let estadoMaisRecente = "";
        let corNameEstado = "";
        /* pega o estado recente do equipamento */
        for (let i = 0; i < stateHistory.length; i++) {
            
            for (let j = 0; j < stateHistory[i].states.length; j++) 
            {
                let proximaData = "";
                let proximaStateId = "";
                if(j == 0){
                  firstDate = stateHistory[0].states[0].date;
                  firstEquipamentoId = stateHistory[0].equipmentId;
                  corNameEstado = estadoCorName(stateHistory[0].states[0].equipmentStateId);
                  firstColorState = estadoCorName[1];
                  firstNameState = estadoCorName[0];
                }else{
                  proximaData = stateHistory[i].states[j].date;
                  proximaStateId = stateHistory[i].states[j].equipmentStateId;
                }
                   
                let retorno = firstDate_do_state_E_true(firstDate,proximaData);
                //se a primeira data for mais recente entao armazena na estadoMaisRecente
                if(retorno){
                  estadoMaisRecente = [firstDate,stateHistory[0].states[0].equipmentStateId];
                  
                }else{//se a segunda data for mais recente entao armazena na estadoMaisRecente
                  estadoMaisRecente = [proximaData,proximaStateId];
                }
            }
          let corNameStateProxima = estadoCorName(estadoMaisRecente[1]);
          stateEquip.push([stateHistory[i].equipmentId, corNameStateProxima[0], corNameStateProxima[1]]);
        }
        function estadoCorName(idState){
          let stateArray = state;
          for (let i = 0; i < stateArray.length; i++) {
              if(stateArray[i].id == idState){
                return [stateArray[i].name,stateArray[i].color];
              }
          }
        }
        function firstDate_do_state_E_true(primeiraData,proximaData){
            let proxima = new Date(proximaData);
            let proximaDateMilisegundo = Date.parse(proxima);

            let primeira = new Date(primeiraData);
            let primeiraDataMilisegundo = Date.parse(primeira);
            /****** retorna o estado mais recente ********/
            //se a proxima data do array é maior do que a primeira data do array
            if(proximaDateMilisegundo > primeiraDataMilisegundo){
              return false;                 
            }else{//se a primeira data do array é menor que as outras datas 
              return true;  
            }
        }
        
      return stateEquip; 
    }
    function posicaoRecente(posicaoEquipHistoryArray)
    {
        let firstDate = "";
        let firstIdEquip = ""
        let posicaoRecente = [];
        for (let i = 0; i < posicaoEquipHistoryArray.length; i++) {
          let posicaoHistory = posicaoEquipHistoryArray[i].positions;
          
          for (let j = 0; j < posicaoHistory.length; j++) {

            if(j == 0){
              firstDate = posicaoEquipHistoryArray[i].positions[j].date;
              firstIdEquip = posicaoEquipHistoryArray[i].equipmentId;
              
            }else{
              let proximaDate = new Date(posicaoEquipHistoryArray[i].positions[j].date);
              let proximaDateMilisegundo = Date.parse(proximaDate);

              let primeiraData = new Date(firstDate);
              let primeiraDataMilisegundo = Date.parse(primeiraData);
              
              if(proximaDateMilisegundo > primeiraDataMilisegundo){
                //proxima data é maior
                posicaoRecente.push([{ lat: posicaoEquipHistoryArray[i].positions[j].lat, lng: posicaoEquipHistoryArray[i].positions[j].lon }, 
                    idEquip = posicaoEquipHistoryArray[i].equipmentId]);
                    break;
                
              }else{
                //primeira data é maior, que dizer a data que inicia na primeira posicao do array
                posicaoRecente.push([{ lat: posicaoEquipHistoryArray[i].positions[0].lat, lng:  posicaoEquipHistoryArray[i].positions[0].lon }, 
                idEquip = firstIdEquip]);
                break;
              }
            }
          }
        }
      return posicaoRecente;
  
    }
}
window.initMap = initMap;