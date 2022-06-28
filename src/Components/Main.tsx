import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import { Link } from "react-router-dom";

import Equipment from "../data/equipment.json";
import Position from "../data/equipmentPositionHistory.json";
import State from "../data/equipmentState.json";
import StateHistory from "../data/equipmentStateHistory.json";

import "./Style/Main.css";

function Main() {
  return (
    <div className="Main">
      <MapContainer
        center={[-19.042273, -46.056535]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {Position.map((pos) => (
          <Marker
            key={pos.equipmentId}
            position={[pos.positions.at(-1)!.lat, pos.positions.at(-1)!.lon]}
          >
            <Popup
              key={pos.equipmentId}
              position={[pos.positions.at(-1)!.lat, pos.positions.at(-1)!.lon]}
            >
              <div className="pop">
                {StateHistory.map((sth) =>
                  sth.equipmentId === pos.equipmentId ? (
                    <>
                      <p>
                        {Equipment.map((eq) =>
                          sth.equipmentId === eq.id ? (
                            <p key={eq.id}>Equipamento: {eq.name}</p>
                          ) : (
                            ""
                          )
                        )}
                      </p>
                      {State.map((st) =>
                        sth.states.at(-1)!.equipmentStateId === st.id ? (
                          <p className={st.name} key={st.id}>
                            {st.name}
                          </p>
                        ) : (
                          ""
                        )
                      )}
                    </>
                  ) : (
                    ""
                  )
                )}

                <Link
                  key={pos.equipmentId}
                  className="button"
                  to={`/event/equipamento/${pos.equipmentId}`}
                >
                  Abrir Histórico
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Main;
