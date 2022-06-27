import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { StateHistory } from "../../components/StateHistory";
import { EquipmentsType } from "../../types/equipments";
import equipmentState from "../../../data/equipmentState.json";

import styles from "./styles.module.scss";

interface DetailsProps {
  equipment: EquipmentsType;
}

const MapLocation = dynamic(
  () => {
    return import("../../components/MapLocation/index");
  },
  {
    ssr: false,
  }
);

export default function EquipmentDetails({ equipment }: DetailsProps) {
  const { model, name, positionHistory, stateHistory } = equipment;

  // function totalEarning(equipment: EquipmentsType) {
  //   const indexWorking = model.hourlyEarnings.findIndex((earning) => {
  //     earning.equipmentStateId ===
  //       equipmentState.find((state) => {
  //         return state.name === "Operando";
  //       })?.id;
  //   });
  //   const indexStoped = model.hourlyEarnings.findIndex((earning) => {
  //     earning.equipmentStateId ===
  //       equipmentState.find((state) => {
  //         return state.name === "Parado";
  //       })?.id;
  //   });
  //   const indexMaintenence = model.hourlyEarnings.findIndex((earning) => {
  //     earning.equipmentStateId ===
  //       equipmentState.find((state) => {
  //         return state.name === "Manutenção";
  //       })?.id;
  //   });
  //   const value = equipment.stateHistory.reduce((acc, state) => {
  //     if (
  //       state.state!.id === model.hourlyEarnings[indexWorking].equipmentStateId
  //     ) {
  //       return acc + model.hourlyEarnings[indexWorking].value;
  //     }
  //     if (
  //       state.state!.id ===
  //       model.hourlyEarnings[indexMaintenence].equipmentStateId
  //     ) {
  //       return acc + model.hourlyEarnings[indexMaintenence].value;
  //     }
  //     return acc + model.hourlyEarnings[indexStoped].value;
  //   }, 0);
  // }

  return (
    <div
      className={styles.detailContainer}
      style={{ borderTop: `2rem solid ${stateHistory[0].state?.color}` }}
    >
      <div className={styles.currentInfos}>
        <div>
          <h1>{name}</h1>
          <p>{model.name}</p>
          <span>Estado atual: </span>
          <span
            style={{ color: stateHistory[0].state?.color, fontWeight: 500 }}
          >
            {stateHistory[0].state?.name}
          </span>
        </div>
        <div id="map" className={styles.mapContainer}>
          <MapLocation equipments={[equipment]} />
        </div>
      </div>
      <h2>Histórico de status do equipamento</h2>
      <StateHistory stateHistory={stateHistory} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  if (params?.slug) {
    const response = await fetch(
      `http://localhost:3000/api/equipments?id=${params.slug}`
    );

    const equipment = await response.json();

    if (equipment.error) {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      };
    }

    return {
      props: {
        equipment,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};
