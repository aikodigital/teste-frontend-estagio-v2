import { useState } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import Map from "./components/Map";
import NavElements from "./components/NavElements";
import TabPane from "./components/TabPane";
import logo from './img/aiko.png'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [equipment, stEquipment] = useState(require("./data/equipment.json"));
  const [busca, setBusca] = useState()
  const filterEquipment = equipment.filter((e:any) => !busca?{}:e.name.includes(busca))

  return (
    <div className="App">
      <div className="tab-div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="default">
          <Row>
            <Col sm={3}>

              <div className="searchInputWrapper">
                <input className="searchInput" type="text" placeholder='Nome do equipamento' onChange={(e:any) => setBusca(e.target.value.toLocaleUpperCase())} />
                <i className="searchInputIcon fa fa-search"></i>
              </div>

              <Nav variant="pills" className="flex-column equipment-list">
                {filterEquipment.map((e: any) => (
                  <NavElements id={e.id} popupContent={e.name} key={e.id} />
                ))}
              </Nav>

              <Nav variant="pills" className="flex-column map-button">
                <Nav.Item>
                  <Nav.Link eventKey="default">
                    <div className="flex">
                      {"Mapa"}
                      <span className="material-symbols-outlined">map</span>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="default">
                  <Map coords={{ lat: -19.151801, lon: -46.007759 }} />
                </Tab.Pane>
                {equipment.map((e: any) => (
                  <TabPane id={e.id} name={e.name} key={e.id} />
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <footer className="footer">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo da aiko" />
        </div>
      </footer>
    </div>
  );
}

export default App;
