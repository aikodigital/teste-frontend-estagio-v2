import L from 'leaflet'
import HarvIcon from '../img/Harvester.png'
import Truck from '../img/Truck.png'
import ExCavator from '../img/excavator.png'


function createIcon(URL) {
    return new L.Icon({
        iconUrl: URL,
        iconSize: [30, 30]
    })
}


export function getIconHarv () {
    return createIcon(HarvIcon)
}

export function getIconTruck () {
    return createIcon(Truck)
}

export function getIconExCavator () {
    return createIcon(ExCavator)
}