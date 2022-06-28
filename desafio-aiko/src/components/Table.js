import { useState } from "react";

import "../styles/table.css";

import dataId from "../data/equipment.json";
import model from "../data/equipmentModel.json";
import stateHis from "../data/equipmentStateHistory.json";
import states from "../data/equipmentState.json";
import position from "../data/equipmentPositionHistory.json";

export const Table = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(
    "dataId",
    dataId,
    "model ",
    model,
    "stateHis",
    stateHis,
    "states ",
    states,
    "position",
    position
  );

  const dataManipulator = dataId.map((data, i) => {
    const modelName = model.find(
      (modelName) => modelName.id === data.equipmentModelId
    ).name;

    const lastState = states.find(
      (stateName) =>
        stateHis[i].states[Array.length - 1].equipmentStateId === stateName.id
    ).name;

    const stateColor = states.find(
      (stateName) =>
        stateHis[i].states[Array.length - 1].equipmentStateId === stateName.id
    ).color;

    return (
      <tr
        className=" hover:bg-gray-200 border-solid border-b text-center text-gray-400"
        key={dataId[i].id}
        style={{ width: "100px", cursor: "pointer" }}
        onClick={() => setShowModal(true)}
      >
        <td>{data.name}</td>
        <td>{modelName}</td>
        <td style={{ color: stateColor }}>{lastState}</td>
      </tr>
    );
  });
  const modalData = stateHis.map((state, i) => {
    return (
      <h6 className="my-4 text-slate-500 text-lg leading-relaxed">
        {state.states[i].date}
      </h6>
    );
  });

  return (
    <table
      id="table"
      className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 undefined overflow-x-auto overflow-y-auto"
      style={{ overflowY: "scroll", height: "23vw" }}
    >
      <thead>
        <tr className="border-solid border-b-1 border-gray text-gray-600 py-4">
          <th>NAME</th>
          <th>MODEL</th>
          <th>STATE</th>
        </tr>
      </thead>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden  fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">{modalData}</div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <tbody>{dataManipulator}</tbody>
    </table>
  );
};
