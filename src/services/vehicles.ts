// IMAGE VEHICLES PROFILE
const vehicles = [
    {name: 'Caminhão de carga', img: '/img/vehicles/cargo-truck.png'},
    {name: 'Harvester', img: '/img/vehicles/harvester.png'},
    {name: 'Garra traçadora', img: '/img/vehicles/tracer-claw.png'}
]

export function vehiclesProfile(vehicleName: string){
    const imageVehicle = vehicles.find( (vehicle)=> {
        return vehicle.name === vehicleName
    })?.img
    
    if(imageVehicle === undefined){
        return '/img/vehicles/unknown.png'
    } else { 
        return imageVehicle
    }

}

// ICONE VEHICLES MAP
const vehiclesIcon = [
    {name: 'Caminhão de carga', img: '/img/vehicles/icon/cargo-truck.png'},
    {name: 'Harvester', img: '/img/vehicles/icon/harvester.png'},
    {name: 'Garra traçadora', img: '/img/vehicles/icon/tracer-claw.png'}
]

export function selectedIconCar(vehicleName: string){
    const imageVehicle = vehiclesIcon.find( (vehicle)=> {
        return vehicle.name === vehicleName
    })?.img

    if(imageVehicle === undefined){
        return '/img/vehicles/icon/unknown.png'
    } else { 
        return imageVehicle
    }
}