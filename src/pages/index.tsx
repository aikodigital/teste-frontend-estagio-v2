import type { NextPage } from "next";
import { EquipmentCard } from "../components/EquipmentCard";
import { Loader } from "../components/Loader";
import { useEquips } from "../hooks/useEquips";
import styles from "./home.module.scss";

const Home: NextPage = () => {
  const { isLoading, equipments } = useEquips();

  return (
    <div>
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <Loader />
        </div>
      ) : (
        <main className={styles.cardGrid}>
          {equipments.map((equipment) => {
            if (equipment) {
              return <EquipmentCard key={equipment.id} equipment={equipment} />;
            }
          })}
        </main>
      )}
    </div>
  );
};

export default Home;
