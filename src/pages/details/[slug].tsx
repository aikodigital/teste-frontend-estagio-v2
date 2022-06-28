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
	const { model, name, stateHistory } = equipment;

	function calcProductivity() {
		const totalTime =
			new Date(stateHistory[0].date).getTime() -
			new Date(stateHistory[stateHistory.length - 1].date).getTime();

		const operatingTime = stateHistory.reduce((acc, state, index, states) => {
			if (state.state?.name === "Operando") {
				return (
					acc +
					(new Date(state.date).getTime() -
						new Date(states[index + 1].date).getTime())
				);
			}
			return acc + 0;
		}, 0);

		return `${((operatingTime / totalTime) * 100).toFixed(2)}%`;
	}

	function calcEarning() {
		const workingId = equipmentState.find(state => {
			return state.name === "Operando";
		})?.id;
		const stoppedId = equipmentState.find(state => {
			return state.name === "Parado";
		})?.id;
		const maintenenceId = equipmentState.find(state => {
			return state.name === "Manutenção";
		})?.id;

		const totalEarning = stateHistory.reduce((acc, state, index, states) => {
			if (index < states.length - 1) {
				if (state.state?.name === "Operando") {
					const time =
						(new Date(state.date).getTime() -
							new Date(states[index + 1].date).getTime()) /
						(1000 * 60 * 60); // to hour
					return (
						acc +
						time *
							model.hourlyEarnings.find(earning => {
								return earning.equipmentStateId === workingId;
							})?.value!
					);
				}
				if (state.state?.name === "Parado") {
					const time =
						(new Date(state.date).getTime() -
							new Date(states[index + 1].date).getTime()) /
						(1000 * 60 * 60); // to hour
					return (
						acc +
						time *
							model.hourlyEarnings.find(earning => {
								return earning.equipmentStateId === stoppedId;
							})?.value!
					);
				}
				if (state.state?.name === "Manutenção") {
					const time =
						(new Date(state.date).getTime() -
							new Date(states[index + 1].date).getTime()) /
						(1000 * 60 * 60); // to hour
					return (
						acc +
						time *
							model.hourlyEarnings.find(earning => {
								return earning.equipmentStateId === maintenenceId;
							})?.value!
					);
				}
			}
			return acc + 0;
		}, 0);

		return totalEarning;
	}

	const equipmentProductivity = calcProductivity();
	const equipmentEarning = calcEarning().toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	return (
		<div
			className={styles.detailContainer}
			style={{ borderTop: `2rem solid ${stateHistory[0].state?.color}` }}
		>
			<div className={styles.currentInfos}>
				<div>
					<h1>{name}</h1>
					<p style={{ fontWeight: 700 }}>{model.name}</p>
					<span>Estado atual: </span>
					<span
						style={{
							color: stateHistory[0].state?.color,
							fontWeight: 500,
						}}
					>
						{stateHistory[0].state?.name}
					</span>
					<p>Produtividade total: {equipmentProductivity}</p>
					<p>Ganho total: {equipmentEarning}</p>
				</div>
				<div id="map" className={styles.mapContainer}>
					<h2>Localização atual:</h2>
					<MapLocation equipments={[equipment]} />
				</div>
			</div>
			<h2>Histórico de status do equipamento</h2>
			<StateHistory stateHistory={stateHistory} />
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
