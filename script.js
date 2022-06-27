import position from './data/equipmentPositionHistory.json' assert {type: 'json'};
import equipments from './data/equipment.json' assert {type: 'json'};
import equipmentStates from './data/equipmentState.json' assert {type: 'json'};
import equipmentModels from './data/equipmentModel.json' assert {type: 'json'};
import stateHistories from './data/equipmentStateHistory.json' assert {type: 'json'};

function newObjectEquiment ( id, model, positionEquipment, states, name, historyState )
{
  return { id, model, positionEquipment, states, name, historyState }
}

function stastesAndDates ()
{
  return this.states.forEach( ( s ) => { s.equipmentStateId } );
}

// NEW OBJECT
const equipment = [
  newObjectEquiment( equipments[ 0 ].id, equipments[ 0 ].equipmentModelId, position[ 0 ].positions, stateHistories[ 0 ].states, equipments[ 0 ].name, stastesAndDates ),
  newObjectEquiment( equipments[ 1 ].id, equipments[ 1 ].equipmentModelId, position[ 1 ].positions, stateHistories[ 1 ].states, equipments[ 1 ].name, stastesAndDates ),
  newObjectEquiment( equipments[ 2 ].id, equipments[ 2 ].equipmentModelId, position[ 2 ].positions, stateHistories[ 2 ].states, equipments[ 2 ].name, stastesAndDates ),
  newObjectEquiment( equipments[ 3 ].id, equipments[ 3 ].equipmentModelId, position[ 3 ].positions, stateHistories[ 3 ].states, equipments[ 3 ].name, stastesAndDates ),
  newObjectEquiment( equipments[ 4 ].id, equipments[ 4 ].equipmentModelId, position[ 4 ].positions, stateHistories[ 4 ].states, equipments[ 4 ].name, stastesAndDates ),
  newObjectEquiment( equipments[ 5 ].id, equipments[ 5 ].equipmentModelId, position[ 5 ].positions, stateHistories[ 5 ].states, equipments[ 5 ].name, stastesAndDates ),
  newObjectEquiment( equipments[ 6 ].id, equipments[ 6 ].equipmentModelId, position[ 6 ].positions, stateHistories[ 6 ].states, equipments[ 6 ].name, stastesAndDates ),
  newObjectEquiment( equipments[ 7 ].id, equipments[ 7 ].equipmentModelId, position[ 7 ].positions, stateHistories[ 7 ].states, equipments[ 7 ].name, stastesAndDates ),
  newObjectEquiment( equipments[ 8 ].id, equipments[ 8 ].equipmentModelId, position[ 8 ].positions, stateHistories[ 8 ].states, equipments[ 8 ].name, stastesAndDates ),
]

//MAP
const map = L.map( 'map' ).setView( [ -19.126536, -45.947756 ], 9 );

L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
} ).addTo( map );

//MARKS
equipment.forEach( ( machine ) =>
{
  //STATE OPERANDO
  if ( machine.states.pop().equipmentStateId === "0808344c-454b-4c36-89e8-d7687e692d57" )
  {
    if ( machine.model === "a3540227-2f0e-4362-9517-92f41dabbfdf" )
    {
      L.marker( [ machine.positionEquipment.pop().lat, machine.positionEquipment.pop().lon ], { title: "Operando" } )
        .bindPopup( `<h5> Caminhão de carga<span class="operando"></span> </h5> <p><strong>NAME:</strong> ${ machine.name }</p> <p><strong>ID:</strong> ${ machine.id }</p> <img src="./img/caminhao-de-carga.jpg" class="im-popup"/>` )
        .addTo( map )
    } else if ( machine.model === "a4b0c114-acd8-4151-9449-7d12ab9bf40f" )
    {
      L.marker( [ machine.positionEquipment.pop().lat, machine.positionEquipment.pop().lon ], { title: "Operando" } )
        .bindPopup( `<h5> Harvester<span class="operando"></span> </h5> <p><strong>NAME:</strong> ${ machine.name }</p> <p><strong>ID:</strong> ${ machine.id }</p> <img src="./img/harvester.jpg" class="im-popup"/>` )
        .addTo( map )
    } else
    {
      L.marker( [ machine.positionEquipment.pop().lat, machine.positionEquipment.pop().lon ], { title: "Operando" } )
        .bindPopup( `<h5> Garra traçadora<span class="operando"></span> </h5> <p><strong>NAME:</strong> ${ machine.name }</p> <p><strong>ID:</strong> ${ machine.id }</p> <img src="./img/garra-traçadora.jpg" class="im-popup"/>` )
        .addTo( map )
    }
    //STATE PARADO
  } else if ( machine.states.pop().equipmentStateId === "baff9783-84e8-4e01-874b-6fd743b875ad" )
  {
    if ( machine.model === "a3540227-2f0e-4362-9517-92f41dabbfdf" )
    {
      L.marker( [ machine.positionEquipment.pop().lat, machine.positionEquipment.pop().lon ], { title: "Parado" } )
        .bindPopup( `<h5> Caminhão de carga<span class="parado"></span> </h5> <p><strong>NAME:</strong> ${ machine.name }</p> <p><strong>ID:</strong> ${ machine.id }</p> <img src="./img/caminhao-de-carga.jpg" class="im-popup"/>` )
        .addTo( map )
    } else if ( machine.model === "a4b0c114-acd8-4151-9449-7d12ab9bf40f" )
    {
      L.marker( [ machine.positionEquipment.pop().lat, machine.positionEquipment.pop().lon ], { title: "Parado" } )
        .bindPopup( `<h5> Harvester<span class="parado"></span> </h5> <p><strong>NAME:</strong> ${ machine.name }</p> <p><strong>ID:</strong> ${ machine.id }</p> <img src="./img/harvester.jpg" class="im-popup"/>` )
        .addTo( map )
    } else
    {
      L.marker( [ machine.positionEquipment.pop().lat, machine.positionEquipment.pop().lon ], { title: "Parado" } )
        .bindPopup( `<h5> Garra traçadora<span class="parado"></span> </h5> <p><strong>NAME:</strong> ${ machine.name }</p> <p><strong>ID:</strong> ${ machine.id }</p> <img src="./img/garra-traçadora.jpg" class="im-popup"/>` )
        .addTo( map )
    }
    //STATE MANUTENÇÃO
  } else
  {
    if ( machine.model === "a3540227-2f0e-4362-9517-92f41dabbfdf" )
    {
      L.marker( [ machine.positionEquipment.pop().lat, machine.positionEquipment.pop().lon ], { title: "Manutenção" } )
        .bindPopup( `<h5> Caminhão de carga<span class="manutenção"></span> </h5> <p><strong>NAME:</strong> ${ machine.name }</p> <p><strong>ID:</strong> ${ machine.id }</p> <img src="./img/caminhao-de-carga.jpg" class="im-popup"/>` )
        .addTo( map )
    } else if ( machine.model === "a4b0c114-acd8-4151-9449-7d12ab9bf40f" )
    {
      L.marker( [ machine.positionEquipment.pop().lat, machine.positionEquipment.pop().lon ], { title: "Manutenção" } )
        .bindPopup( `<h5> Harvester<span class="manutenção"></span> </h5> <p><strong>NAME:</strong> ${ machine.name }</p> <p><strong>ID:</strong> ${ machine.id }</p> <img src="./img/harvester.jpg" class="im-popup"/>` )
        .addTo( map )
    } else
    {
      L.marker( [ machine.positionEquipment.pop().lat, machine.positionEquipment.pop().lon ], { title: "Manutenção" } )
        .bindPopup( `<h5> Garra traçadora<span class="manutenção"></span> </h5> <p><strong>NAME:</strong> ${ machine.name }</p> <p><strong>ID:</strong> ${ machine.id }</p> <img src="./img/garra-traçadora.jpg" class="im-popup"/>` )
        .addTo( map )
    }
  }
} );

//LIST OF STATES
let equipmentName = document.getElementById( 'machine_name' )

equipment.forEach( ( machine ) =>
{
  equipmentName.insertAdjacentHTML( "beforebegin",
    `<div class="col-1 mx-2 mt-2">
      <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        ${ machine.name }
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="button-${ machine.name }">
      </ul>
    </div>`
  )
  let buttonState = document.getElementById( "button-" + machine.name )

  machine.states.forEach( ( state ) =>
  { if (state.equipmentStateId === "0808344c-454b-4c36-89e8-d7687e692d57") {
    buttonState.insertAdjacentHTML( "afterbegin",
      `<li>
          <a class="dropdown-item" href="#"><span class="operando"></span> Operando, Data: ${state.date}</a>
      </li>`) } else if(state.equipmentStateId === "baff9783-84e8-4e01-874b-6fd743b875ad") {
        buttonState.insertAdjacentHTML( "afterbegin",
      `<li>
          <a class="dropdown-item" href="#"><span class="parado"></span> Parado, Data: ${state.date}</a>
      </li>`)
      } else {
        buttonState.insertAdjacentHTML( "afterbegin",
        `<li>
            <a class="dropdown-item" href="#"><span class="manutenção"></span> Manutenção, Data: ${state.date}</a>
        </li>`)
      }
      } )

} );
