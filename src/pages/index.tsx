import type { NextPage } from "next";
import { EquipmentCard } from "../components/EquipmentCard";
import { Loader } from "../components/Loader";
import { useEquips } from "../hooks/useEquips";
import styles from "../styles/pages/home.module.scss";

const Home: NextPage = () => {
  const { isLoading, equipments } = useEquips();

  return (
    <div>
      <h1>Hello</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.cardGrid}>
          {equipments.map((equipment) => {
            return (
              <EquipmentCard
                key={equipment.id}
                color={equipment.stateHistory![2].state?.color}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
