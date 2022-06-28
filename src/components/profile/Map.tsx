import { Icon } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { format } from 'date-fns'
import 'leaflet/dist/leaflet.css'
// COMPONENTS
import { iMapProfile } from 'src/@types/components'
// SERVICES
import { selectedIconCar } from '@services/vehicles'

const Map = ({equipments}: iMapProfile):JSX.Element => {
 
    // ICON MARKER MAP
    const iconMarkerCarOn = new Icon({
        iconUrl: selectedIconCar(equipments.model || ''),
        iconRetinaUrl: selectedIconCar(equipments.model || ''),
        iconSize: [50, 50]
    })

    return(<>
        <MapContainer center={[-19.150000, -46.000000]} zoom={10} scrollWheelZoom={false} style={{width: '100%', height: '100%'}}>
            <TileLayer url={'https://api.maptiler.com/maps/basic-gray/256/{z}/{x}/{y}.png?key=0qHSjsx5XYYz0NFc2FU1'}/>

            {equipments.statePosition?.length !== 0 &&(
                equipments.statePosition?.map( (equipment, index: number) => {
                    
                    return(
                    <Marker
                        key={index}
                        position={{lat: equipment.lat, lng: equipment.lon}}
                        icon={iconMarkerCarOn}>
                            <Popup>
                                <p>Latitude: {equipment.lat}</p>
                                <p>Longitude: {equipment.lon}</p>
                                <p>Data: {format(new Date(equipment.date), 'dd/MM/yyyy')}</p>
                                <p>Hora: {equipment.date.substring(19,11)}</p>
                            </Popup>
                    </Marker>
                    )
                })
            )}
        </MapContainer>
    </>)
}

export default Map