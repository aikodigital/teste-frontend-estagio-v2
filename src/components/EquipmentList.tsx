import { Funnel, MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import equipments from '../../data/equipment.json';
import equipmentState from '../../data/equipmentState.json'
import equipmentModels from '../../data/equipmentModel.json'
import allEquipmentStateHistory from '../../data/equipmentStateHistory.json'

function filterByModelAndState(filtersModel: any, filtersState: any) {
  let newEquipments: any = [];

  for(let model of filtersModel) {
    for(let state of filtersState) {
      newEquipments = newEquipments.concat(equipments.filter(eq => {
        const equipmentStates = allEquipmentStateHistory.filter(state => state.equipmentId == eq.id)[0].states;
        const lastEquipmentState = equipmentStates[equipmentStates.length - 1];

        return lastEquipmentState.equipmentStateId == state && eq.equipmentModelId == model ? true : false;
      }))
    }
  }

  return newEquipments.filter((val: any, pos: any, arr: any) => arr.indexOf(val)  == pos);
}

function filterByModel(filtersModel: any) {
  let newEquipments: any = [];

  for(let model of filtersModel) {
    newEquipments = newEquipments.concat(equipments.filter(eq => {
      return eq.equipmentModelId == model ? true : false;
    }))
  }

  return newEquipments.filter((val: any, pos: any, arr: any) => arr.indexOf(val)  == pos);
}

function filterByState(filtersState: any) {
  let newEquipments: any = [];

  for(let state of filtersState) {
    newEquipments = newEquipments.concat(equipments.filter(eq => {
      const equipmentStates = allEquipmentStateHistory.filter(state => state.equipmentId == eq.id)[0].states;
      const lastEquipmentState = equipmentStates[equipmentStates.length - 1];

      return lastEquipmentState.equipmentStateId == state ? true : false;
    }))
  }

  return newEquipments.filter((val: any, pos: any, arr: any) => arr.indexOf(val)  == pos);
}

function filteredEquipments(filterConfigs: any) {
  let filtersModel = filterConfigs.model && Object.keys(filterConfigs.model).filter((key: string) => filterConfigs.model[key] == true).length > 0 ? Object.keys(filterConfigs.model).filter((key: string) => filterConfigs.model[key] == true) : undefined;
  let filtersState = filterConfigs.state && Object.keys(filterConfigs.state).filter((key: string) => filterConfigs.state[key] == true).length > 0 ? Object.keys(filterConfigs.state).filter((key: string) => filterConfigs.state[key] == true) : undefined;
  
  if(filtersModel && filtersState) return filterByModelAndState(filtersModel, filtersState);
  if(filtersModel) return filterByModel(filtersModel);
  if(filtersState) return filterByState(filtersState);

  return equipments;
}

function EquipmentList({ filterConfigs, setFilterConfigs }: any) {
    const { equipmentId } = useParams();
    const [ searchIsVisible, setSearchIsVisible ] = useState(false);
    const [ searchInput, setSearchInput ] = useState("");
    const [ filterIsVisible, setFilterIsVisible ] = useState(false);

    return (
      <nav className="flex flex-col flex-1">
        <div className="flex justify-between mx-5 my-3">
          <span className="text-xl font-bold ">Equipamentos</span>

          <div className="flex items-center">
            <Funnel 
              weight="bold"
              className="inline ml-2 transition cursor-pointer hover:scale-110"
              size={18}
              onClick={() => {
                setFilterConfigs({ model: {}, state: {}, });
                filterIsVisible ? setFilterIsVisible(false) : setFilterIsVisible(true)}
              }
            />

            <MagnifyingGlass
              weight="bold"
              className="inline ml-2 transition cursor-pointer hover:scale-110"
              size={18}
              onClick={() => {
                setSearchInput("");
                searchIsVisible ? setSearchIsVisible(false) : setSearchIsVisible(true)}
              }
            />
          </div>
        </div>

        <div className="flex-col px-4 pt-1 pb-3 mb-2 bg-gray-800 " style={filterIsVisible ? { display: "flex" } : { display: "none" }}>
          <span className="text-lg font-bold text-center" >Filtros</span>
          <div className="flex items-center gap-2 text-sm">

            <div className="flex flex-col gap-1">
              <span className="mb-1 font-bold text-center">Modelos:</span>
              {equipmentModels.map(model => {
                return <div key={model.id} className="flex items-center h-6 gap-2 text-sm leading-none">
                  <input 
                    key={model.id}
                    type="checkbox"
                    className="w-4 h-4"
                    onChange={() => {
                      let newFilters: any = { 
                        ...filterConfigs
                      }
                      newFilters.model[model.id as keyof typeof newFilters] = newFilters.model[model.id as keyof typeof newFilters] ? false : true;
                      setFilterConfigs(newFilters);
                    }}
                    checked={filterConfigs.model && filterConfigs.model[model.id as keyof typeof filterConfigs] ? true : false}
                    />
                  <span className="flex-1">
                    {model.name}
                  </span>
                  </div>
                })}
            </div>
            
            <div className="flex flex-col gap-1">
            <span className="mb-1 font-bold text-center">Estados:</span>
              {equipmentState.map(state => {
                return <div key={state.id} className="flex items-center h-6 gap-2 text-sm leading-none">
                <input 
                  key={state.id}
                  type="checkbox"
                  className="w-4 h-4"
                  onChange={() => {
                    let newFilters: any = { 
                      ...filterConfigs
                    }
                    newFilters.state[state.id as keyof typeof newFilters.state] = newFilters.state[state.id as keyof typeof newFilters] ? false : true;
                    setFilterConfigs(newFilters);
                  }}
                  checked={filterConfigs.state && filterConfigs.state[state.id as keyof typeof filterConfigs] ? true : false}
                  />
                <span className="flex-1" style={{color: state.color}}>
                  {state.name}
                </span>
                </div>
              })}
            </div>
          </div>
        </div>

        <div className="flex-col bg-gray-800" style={searchIsVisible ? { display: "flex" } : { display: "none" }}>
          <span className="py-2 text-lg font-bold text-center">Pesquisa</span>
          <input
            placeholder="Digite sua pesquisa" 
            value={searchInput}
            onChange={(input) => {
              setSearchInput(input.target.value.toLowerCase())
            }}
            className="flex-1 px-4 py-2 mb-2 text-sm text-gray-400 bg-gray-700 outline-none focus-visible:outline-blue-500 focus-visible:outline-2 focus-visible:outline-offset-0"
            type="search"
            name="Pesquise um equipamento"
          />
        </div>

        <ul className="flex flex-col flex-1 overflow-x-hidden">
          {filteredEquipments(filterConfigs).filter((obj: any) => {
            return searchInput ? obj.name.toLowerCase().indexOf(searchInput) != -1 : true;
          }).map((equipment: any) => {
            const classes = equipment.id == equipmentId
            ? "flex items-center justify-center min-h-[30px] p-1 text-blue-400 font-bold scale-110"
            : "p-1 flex items-center justify-center min-h-[30px] transition hover:scale-110";

            return <li key={equipment.id} className={classes}>
              <Link className="flex-1 text-center" to={"/" + equipment.id}>{equipment.name}</Link>
            </li>
          })}
        </ul>
      </nav>
    )
  }
  
  export default EquipmentList
  