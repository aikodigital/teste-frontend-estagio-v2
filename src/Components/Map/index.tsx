import { TileLayer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import {ReactNode} from 'react'
import "leaflet/dist/leaflet.css"
import * as S from'./style'

interface Props{
    children: ReactNode,
    height: string
}

function Map({children, height}:Props) {

  const position = [-19.300731, -46.107543] as LatLngExpression
  
  return (

      <S.StyledMap height={height} center={position} zoom={10} scrollWheelZoom={true}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {children}
      </S.StyledMap>
  )
}

export default Map