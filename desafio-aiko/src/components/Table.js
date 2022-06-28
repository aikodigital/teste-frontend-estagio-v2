import { useState } from "react";
import { data } from "../data/assignedData";

import "../styles/table.css";

export const Table = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(data, "data");

  const stateIdName = data.filter((equip, i, arr) => {
    if (
      equip.stateHis[i].states[Array.length - 1].equipmentStateId ===
      "0808344c-454b-4c36-89e8-d7687e692d57"
    ) {
      return data.states[i].name;
    }
    if (
      equip.stateHis[i].states[Array.length - 1].equipmentStateId ===
      "baff9783-84e8-4e01-874b-6fd743b875ad"
    ) {
      return data.states[i].name;
    }
    if (
      equip.stateHis[i].states[Array.length - 1].equipmentStateId ===
      "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f"
    ) {
      return data.states[i].name;
    }
  });

  return (
    <table
      id="table"
      className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 undefined overflow-x-auto overflow-y-auto"
      style={{ overflowY: "scroll" }}
    >
      <thead>
        <tr className="border-solid border-b-1 border-gray">
          <th>NAME</th>
          <th>MODEL</th>
          <th>STATE</th>
          <th>LAST POSITION</th>
        </tr>
      </thead>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                <div className="relative p-6 flex-auto">
                  {data.stateHis.map((state, i) => {
                    return (
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        Data: {data.stateHis[i].states[i].date} :
                        {data.stateHis[i].states[i].equipmentStateId}
                      </p>
                    );
                  })}
                </div>
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
      <tbody>
        {data.dataId &&
          data.model.map((r, i) => {
            return (
              <tr
                className=" hover:bg-gray-200 border-solid border-b text-center"
                key={data.dataId[i].id}
                style={{ width: "100px", cursor: "pointer" }}
                onClick={() => setShowModal(true)}
              >
                <td>{data.dataId[i].name}</td>
                <td>{data.model[i].name}</td>
                <td>{stateIdName()}</td>
                <td>{}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
