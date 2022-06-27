import { useParams } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import State from "../data/equipmentState.json";
import StateHistory from "../data/equipmentStateHistory.json";
import Equipment from "../data/equipment.json";

import "./Style/History.css";

function History() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="History">
      <Header></Header>
      <div className="container">
        <h1>
          {Equipment.map((eq) =>
            id === eq.id ? <p>Equipamento: {eq.name}</p> : ""
          )}
        </h1>
        {StateHistory.map((sth) =>
          sth.equipmentId === id ? (
            <>
              <p className="borda">
                {sth.states.map((ids) => (
                  <p className="tabela">
                    <p>Data: {ids.date}</p>

                    <p className="box">
                      {State.map((st) =>
                        ids.equipmentStateId === st.id ? (
                          <p className={st.name}> {st.name}</p>
                        ) : (
                          ""
                        )
                      )}
                    </p>
                  </p>
                ))}
              </p>
            </>
          ) : (
            ""
          )
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default History;
