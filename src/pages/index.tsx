import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { EquipmentCard } from "../components/EquipmentCard";
import { Loader } from "../components/Loader";
import { useEquips } from "../hooks/useEquips";
import styles from "./home.module.scss";

const MapLocation = dynamic(
	() => {
		return import("../components/MapLocation/index");
	},
	{
		ssr: false,
	}
);

const Home: NextPage = () => {
	const { isLoading, equipments, displayedEquipments } = useEquips();

	return (
		<div>
			{isLoading ? (
				<div className={styles.loadingContainer}>
					<Loader />
				</div>
			) : (
				<div className={styles.homeContainer}>
					<h1>Lista de equipamentos</h1>
					<main className={styles.cardGrid}>
						{displayedEquipments.map(equipment => {
							if (equipment) {
								return (
									<EquipmentCard key={equipment.id} equipment={equipment} />
								);
							}
						})}
					</main>
					<h1>Localização atual dos equipamentos</h1>
					<div className={styles.mapContainer}>
						<MapLocation equipments={equipments!} zoom={10} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
