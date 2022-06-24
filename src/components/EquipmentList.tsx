import { Link, useParams } from 'react-router-dom';
import equipments from '../../data/equipment.json';

function EquipmentList() {
    const { equipmentId } = useParams();

    return (
      <nav>
        <span className="flex justify-center mt-6 mb-3 text-xl font-bold">Equipamentos</span>

        <ul>
          {equipments.map(equipment => {
            const classes = equipment.id == equipmentId ? "flex items-center justify-center min-h-[30px] font-bold text-blue-400 scale-110" : "flex items-center justify-center min-h-[30px] transition hover:scale-110"

            return <li key={equipment.id} className={classes}>
              <Link to={"/" + equipment.id}>{equipment.name}</Link>
            </li>
          })}
        </ul>
      </nav>
    )
  }
  
  export default EquipmentList
  