import { GetServerSideProps } from "next";
import { api } from "../../services/api";
import { EquipmentsType } from "../../types/equipments";

interface DetailsProps {
  equipment: EquipmentsType;
}

export default function EquipmentDetails({ equipment }: DetailsProps) {
  return (
    <div>
      <h1>{equipment.name}</h1>
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
