import './style.css';
import Map from '../../components/Map';

function MapView(){
    return(
        <div className='container' id='map-container'>
            <h2>Posição Atual dos Equipamentos🚜:</h2>
            <Map/>
        </div>
    );
}

export default MapView;