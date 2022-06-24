import { MapContainer } from "react-leaflet";
import styled from "styled-components";

interface props{
    height: string
}

export const StyledMap = styled(MapContainer)<props>`
    width: 100%;
    height: ${props=>props.height};

`