/* eslint-disable react/prop-types */
import React from "react";
import { Popup, Tooltip } from "react-leaflet";
import styled from "styled-components";
import dayjs from "dayjs";

import equipmentState from "../../assets/data/equipmentState.json";
import equipmentStateHistory from "../../assets/data/equipmentStateHistory.json";
import equipment from "../../assets/data/equipment.json";
import equipmentModel from "../../assets/data/equipmentModel.json";

function PopupMarker({ index, markColor }) {
	const searchEquipmentActualState = equipmentState.find(
		(status) =>
			status.id ===
			equipmentStateHistory[index].states[
				equipmentStateHistory[index].states.length - 1
			].equipmentStateId
	).name;

	const modelOfEquipment = equipment[index].name;

	const typeOfEquipment = equipmentModel.find(
		(type) => type.id === equipment[index].equipmentModelId
	).name;

	return (
		<>
			<Popup maxHeight={320} maxWidth={250}>
				<BoxPopUp>
					<h2>
						{modelOfEquipment} - {typeOfEquipment}
					</h2>
					<StatusTitle>Status</StatusTitle>
					<Status color={markColor}>{searchEquipmentActualState}</Status>
					<HistoryTitle>Histórico</HistoryTitle>

					<ContainerLista>
						{equipmentStateHistory[index].states.map((item, index) => (
							<Lista key={index}>
								{dayjs(item.date).format("DD/MM/YY HH:mm:ss")} -{" "}
								{
									equipmentState.find(
										(state) => state.id === item.equipmentStateId
									).name
								}
							</Lista>
						))}
					</ContainerLista>
				</BoxPopUp>
			</Popup>
			<Tooltip direction="right" offset={[13, 0]} opacity={1} permanent>
				<span>{modelOfEquipment}</span>
				<StateLabel color={markColor}>
					{" "}
					- {searchEquipmentActualState}
				</StateLabel>
			</Tooltip>
		</>
	);
}

export default PopupMarker;

const BoxPopUp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px 15px;

	h2 {
		font-size: 15px;
		color: gray;
		margin-bottom: 10px;
		text-align: center;
	}
`;

const StateLabel = styled.span`
	color: ${(props) => props.color};
`;

const HistoryTitle = styled.div`
	font-size: 13px;
	color: grey;
	text-decoration: underline;
	margin-bottom: 10px;
`;

const StatusTitle = styled.div`
	color: black;
	font-size: 15px;
	font-weight: bold;
	margin-bottom: 8px;
`;

const Status = styled.div`
	font-size: 20px;
	color: ${(props) => props.color};
	margin-bottom: 8px;
`;

const ContainerLista = styled.ul`
	width: 190px;
	height: 100%;
`;

const Lista = styled.li`
	font-size: 12px;
`;
