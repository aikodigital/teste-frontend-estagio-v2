import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { StateHistory } from "../../components/StateHistory";
import { EquipmentsType } from "../../types/equipments";

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
  return (
    <div className={styles.detailContainer}>
      <h1>{name}</h1>

      {/* {stateHistory.map((stateData) => {
        const date = new Date(stateData.date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
        return (
          <>
            <span>{date} - </span>
            <span style={{ color: stateData.state?.color }}>
              {stateData.state?.name}
            </span>
          </>
        );
      })} */}
      <StateHistory stateHistory={stateHistory} />
      <div id="map">
        <MapLocation equipment={equipment} />
      </div>
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
