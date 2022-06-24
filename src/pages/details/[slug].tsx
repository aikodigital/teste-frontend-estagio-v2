import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
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
  return (
    <div className={styles.detailContainer}>
      <h1>{equipment.name}</h1>
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
