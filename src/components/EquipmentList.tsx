import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import equipments from '../../data/equipment.json';

function EquipmentList() {
    const { equipmentId } = useParams();
    const [ searchIsVisible, setSearchIsVisible ] = useState(false);
    const [ searchInput, setSearchInput ] = useState("");

    return (
      <nav className="flex flex-col flex-1">
        <div className="flex justify-between mx-5 my-3">
          <span className="text-xl font-bold ">Equipamentos</span>

          <div className="flex items-center">
            <MagnifyingGlass
              weight="bold"
              className="inline ml-2 transition cursor-pointer hover:scale-110"
              onClick={() => {
                setSearchInput("");
                searchIsVisible ? setSearchIsVisible(false) : setSearchIsVisible(true)}
              }
            />
          </div>
        </div>

        <div style={searchIsVisible ? { display: "flex" } : { display: "none" }}>
          <input
            placeholder="Digite sua pesquisa" 
            value={searchInput}
            onChange={(input) => {
              setSearchInput(input.target.value.toLowerCase())
            }}
            className="flex-1 px-4 py-2 mb-2 text-sm text-gray-400 bg-gray-800 outline-none focus-visible:outline-blue-500 focus-visible:outline-2 focus-visible:outline-offset-0"
            type="search"
            name="Pesquise um equipamento"
          />
        </div>

        <ul className="flex flex-col flex-1 overflow-x-hidden">
          {equipments.filter((obj) => {
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
  