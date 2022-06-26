import { Link, useParams } from 'react-router-dom';
import equipments from '../../data/equipment.json';

function EquipmentList() {
    const { equipmentId } = useParams();

    return (
      <nav>
        <span className="flex justify-center mt-6 mb-3 text-xl font-bold">Equipamentos</span>

        <ul className="flex flex-col overflow-x-hidden">
          {equipments.map(equipment => {
            const classes = equipment.id == equipmentId ? "flex-1 flex items-center justify-center min-h-[30px] text-blue-400 font-bold scale-110" : "flex-1 flex items-center justify-center min-h-[30px] transition hover:scale-110"

            return <li key={equipment.id} className={classes}>
              <Link className="flex-1 text-center" to={"/" + equipment.id}>{equipment.name}</Link>
            </li>
          })}
        </ul>
      </nav>
    )
  }
  
  export default EquipmentList
  