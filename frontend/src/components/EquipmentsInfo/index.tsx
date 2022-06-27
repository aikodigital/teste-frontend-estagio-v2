import Truck from "../../assets/truck.png";
import Harvester from "../../assets/harvester.png";
import TowTruck from "../../assets/tow-truck.png";

import styles from "./index.module.css";

const EquipmentsInfo = () => (
  <div className={styles.container}>
    <ul>
      <li>
        <img src={Truck} alt="Caminhão de carga" />
        <span>Caminhão de carga</span>
      </li>
      <li>
        <img src={Harvester} alt="Harvester" />
        <span>Harvester</span>
      </li>
      <li>
        <img src={TowTruck} alt="Garra traçadora" />
        <span>Garra traçadora</span>
      </li>
    </ul>
  </div>
);

export default EquipmentsInfo;
