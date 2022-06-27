import "./main.css";
import Map from "../map/Map";

const Main = () => {
  return (
    <div className='m'>
      <div className='m-header'>
        <span className='m-tittle'>Relação de Equipamentos Ativos</span>
      </div>
      <div className='m-map'>
          <Map />
      </div>
    </div>
  )
}

export default Main
