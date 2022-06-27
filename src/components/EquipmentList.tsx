import { Funnel, MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import equipments from '../../data/equipment.json';
import equipmentState from '../../data/equipmentState.json'
import equipmentModels from '../../data/equipmentModel.json'
import allEquipmentStateHistory from '../../data/equipmentStateHistory.json'

function filteredEquipments(filterConfigs: any) {
  let newEquipments = equipments;
  let filters = filterConfigs ? Object.keys(filterConfigs).filter((key: string) => filterConfigs[key] == true) : [];

  for(let filter of filters) {
    newEquipments = equipments.filter(eq => {
      const equipmentStates = allEquipmentStateHistory.filter(state => state.equipmentId == eq.id)[0].states;
      const lastEquipmentState = equipmentStates[equipmentStates.length - 1];

      return lastEquipmentState.equipmentStateId == filter || eq.equipmentModelId == filter ? true : false;
    })
  }

  return newEquipments;
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
                console.log(setFilterConfigs)
                setFilterConfigs({});
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
                return <div className="flex items-center h-6 gap-2 text-sm leading-none">
                  <input 
                    key={model.id}
                    type="checkbox"
                    className="w-4 h-4"
                    onChange={() => {
                      let newFilters: any = { 
                        ...filterConfigs
                      }
                      newFilters[model.id as keyof typeof newFilters] = newFilters[model.id as keyof typeof newFilters] ? false : true;
                      setFilterConfigs(newFilters);
                    }}
                    checked={filterConfigs && filterConfigs[model.id as keyof typeof filterConfigs] ? true : false}
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
                return <div className="flex items-center h-6 gap-2 text-sm leading-none">
                <input 
                  key={state.id}
                  type="checkbox"
                  className="w-4 h-4"
                  onChange={() => {
                    let newFilters: any = { 
                      ...filterConfigs
                    }
                    newFilters[state.id as keyof typeof newFilters] = newFilters[state.id as keyof typeof newFilters] ? false : true;
                    setFilterConfigs(newFilters);
                    console.log(filterConfigs)
                  }}
                  checked={filterConfigs && filterConfigs[state.id as keyof typeof filterConfigs] ? true : false}
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
          {filteredEquipments(filterConfigs).filter((obj) => {
            return searchInput ? obj.name.toLowerCase().indexOf(searchInput) != -1 : true;
          }).map(equipment => {
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
  