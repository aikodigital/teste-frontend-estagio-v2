import { useState } from "react";
import equipmentDataId from "../data/equipment.json";
import equipmentModel from "../data/equipmentModel.json";

export const Table = () => {
  const [equipmentId, setEquipamentId] = useState(equipmentDataId);
  const [model, setModel] = useState(equipmentModel);
  return (
    <table className="table-fixed w-11/12 d-flex justify-items-center">
      <thead>
        <tr className="border-solid border-b-2 border-black">
          <th>Equipament</th>
          <th>Name</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {equipmentId &&
          model.map((data, i) => {
            return (
              <tr
                className=" hover:bg-gray-200 border-solid border-b text-center"
                key={equipmentId[i].id}
                style={{ width: "200px" }}
              >
                <td>{model[i].name}</td>
                <td className="">{equipmentId[i].name}</td>
                <td>{equipmentId[i].equipmentModelId}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
