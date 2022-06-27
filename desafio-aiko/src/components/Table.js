import { useState } from "react";
import equipmentDataId from "../data/equipment.json";
import equipmentModel from "../data/equipmentModel.json";
import "../styles/table.css";

export const Table = () => {
  const [equipmentId, setEquipamentId] = useState(equipmentDataId);
  const [model, setModel] = useState(equipmentModel);
  return (
    <table
      id="table"
      className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 undefined overflow-x-auto overflow-y-auto"
      style={{ overflowY: "scroll" }}
    >
      <thead>
        <tr className="border-solid border-b-1 border-gray">
          <th>Equipament</th>
          <th>Name</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {equipmentId.map((data, i) => {
          return (
            <tr
              className=" hover:bg-gray-200 border-solid border-b text-center"
              key={equipmentId[i].id}
              style={{ width: "100px" }}
            >
              <td>{}</td>
              <td className="">{equipmentId[i].name}</td>
              <td>{equipmentId[i].equipmentModelId}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
