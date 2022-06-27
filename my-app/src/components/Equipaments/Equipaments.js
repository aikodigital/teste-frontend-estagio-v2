import react from "react";
import props from "../../data/equipment.json"
import { Root } from 'react-dom/server';

function Name(props) {
  return <imput type="Maquina" id={props.Name} />;

}

function App () {
  return (
    <div>
      <Name Name="Maquina" />
      </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default Name;