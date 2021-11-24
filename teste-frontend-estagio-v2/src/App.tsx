import "leaflet/dist/leaflet.css";

import React, { FormEvent, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { v4 as uuidv4 } from "uuid";
import { fetchLocalMapBox } from "./apiMapBox";
import AsyncSelect from "react-select/async"; 
import mapPackage from "./package.svg";
import mapPin from "./pin.svg"; 
import "./App.css";

const initialPosition = { lat: -22.2154042, lng: -54.8331331 };
const mapPackageIcon = Leaflet.icon({
   iconUrl: mapPackage,
   iconSize: [58, 68],
   iconAnchor: [29, 68],
   popupAnchor: [170, 2],
 });

 const mapPinIcon = Leaflet.icon({
   iconUrl: mapPin,
   iconSize: [58, 68],
   iconAnchor: [29, 68],
   popupAnchor: [170, 2],
 });
 
interface Delivery {
   id: string;
   name: string;
   address: string;
   complement: string;
   latitude: number;
   longitude: number;
 }
 
 type Position = {
   longitude: number;
   latitude: number;
 };

 function App() {
   const [deliveries, setDeliveries] = useState<Delivery[]>([]);
 
  const [position, setPosition] = useState<Position | null>(null);

   const [name, setName] = useState("");
   const [complement, setComplement] = useState("");
   const [address, setAddress] = useState<{
    label: string;
     value: string;
   } | null>(null);
 
   const [location, setLocation] = useState(initialPosition);
 
   const loadOptions = async (inputValue: any, callback: any) => {
     if (inputValue.length < 5) return;
     let places: any = [];
     const response = await fetchLocalMapBox(inputValue);
     response.features.map((item: any) => {
       places.push({
         label: item.place_name,
         value: item.place_name,
         coords: item.center,
         place: item.place_name,
       });
    });
 
     callback(places);
   };
 
   const handleChangeSelect = (event: any) => {
     console.log("changed", event);
     setPosition({
       longitude: event.coords[0],
       latitude: event.coords[1],
     });
 
     setAddress({ label: event.place, value: event.place });
 
     setLocation({
       lng: event.coords[0],
       lat: event.coords[1],
     });
   };
 
   async function handleSubmit(event: FormEvent) {
     event.preventDefault();
 
     if (!address || !name) return;
 
     setDeliveries([
       ...deliveries,
       {
         id: uuidv4(),
         name,
         address: address?.value || "",
         complement,
         latitude: location.lat,
         longitude: location.lng,
       },
     ]);
 
     setName("");
     setAddress(null);
     setComplement("");
     setPosition(null);
   }
 
   return (
     <div id="page-map">
       <main>
         <form onSubmit={handleSubmit} className="landing-page-form">
           <fieldset>
             <legend>Entregas</legend>
 
             <div className="input-block">
               <label htmlFor="name">Nome</label>
               <input
                 id="name"
                 placeholder="Digite seu nome"
                 value={name}
                 onChange={(event) => setName(event.target.value)}
               />
             </div>
 
             <div className="input-block">
               <label htmlFor="address">Endere√ßo</label>
               <AsyncSelect
                 placeholder="Digite seu endere√ßo..."
                 classNamePrefix="filter"
                 cacheOptions
                 loadOptions={loadOptions}
                 onChange={handleChangeSelect}
                 value={address}
               />
             </div>
 
             <div className="input-block">
               <label htmlFor="complement">Complemento</label>
               <input
                 placeholder="Apto / Nr / Casa..."
                 id="complement"
                 value={complement}
                 onChange={(event) => setComplement(event.target.value)}
               />
             </div>
           </fieldset>
 
           <button className="confirm-button" type="submit">
             Confirmar
           </button>
         </form>
       </main>
 
       <Map
         center={location}
         zoom={15}
         style={{ width: "100%", height: "100%" }}
       >
         {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
         <TileLayer
           url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
         />
 
         {position && (
           <Marker
             icon={mapPinIcon}
             position={[position.latitude, position.longitude]}
           ></Marker>
         )}
 
         {deliveries.map((delivery) => (
           <Marker
             key={delivery.id}
             icon={mapPackageIcon}
             position={[delivery.latitude, delivery.longitude]}
           >
             <Popup
               closeButton={false}
               minWidth={240}
               maxWidth={240}
               className="map-popup"
             >
               <div>
                 <h3>{delivery.name}</h3>
                <p>
                 {delivery.address} - {delivery.complement}
               </p>
              </div>
            </Popup>
          </Marker>
        ))}
       </Map>
    </div>
  );
 }
export default App;