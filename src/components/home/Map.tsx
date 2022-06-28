import Link from 'next/link'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Leaflet from 'leaflet'
// STYLE
import 'leaflet/dist/leaflet.css'
import { Container } from '@styles/home/map'
// TYPE
import { iMap } from 'src/@types/components'
// SERVICES
import { selectedIconCar } from '@services/vehicles'

const Map = ({equipments}: iMap):JSX.Element => {

    const position: Object = equipments?.map( (equipment) => equipment.position)[0] || {} 

    return(<> 
    <Container>
        <MapContainer center={[-19.150000, -46.000000]} zoom={10} scrollWheelZoom={false} style={{width: '100%', height: '100%'}}>
            <TileLayer url={'https://api.maptiler.com/maps/basic-gray/256/{z}/{x}/{y}.png?key=0qHSjsx5XYYz0NFc2FU1'}/>

            {Object.values(position || {}).length !== 0 &&
                (equipments?.map( (equipments: any, index: number) => {
                    return(
                    <Marker 
                        key={index} 
                        position={{lat: equipments?.position.lat, lng: equipments?.position.lon}}
                        icon={  new Leaflet.Icon({
                            iconUrl: selectedIconCar(equipments?.model),
                            iconRetinaUrl: selectedIconCar(equipments?.model),
                            iconSize: [60, 60]
                        }) }>
                            <Popup>
                                <p>Nome: <Link href={`/profile/${equipments?.id}`}><a>{equipments?.name}</a></Link></p>
                                <p>Modelo: {equipments?.model}</p>
                                <p>Estado: {equipments?.state}</p> 
                            </Popup>
                    </Marker>
                    )
                })
            )} 
        </MapContainer>
    </Container>
    </>)
}

export default Map