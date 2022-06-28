import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

interface MapLeaflet {
  children: React.ReactNode;
  className?: string;
  initialPosition?: LatLngExpression;
}

export const MapLeaflet = ({
  children,
  className,
  initialPosition,
}: MapLeaflet) => {
  return (
    <div className={className ? className : 'w-full h-screen'}>
      <MapContainer
        className="w-full h-full"
        center={initialPosition ? initialPosition : [-19.15, -46]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
        />
        {children}
      </MapContainer>
    </div>
  );
};
