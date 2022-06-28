import { MapContainer as MapBox, Popup as PopupBox } from 'react-leaflet'
import styled from 'styled-components'

export const MapContainer = styled(MapBox)`
  height: 100%;
  z-index: 0;
`;

interface IPopupButtonProps {
  buttonBackground: string
}

export const Popup = styled(PopupBox)<IPopupButtonProps>`
  strong {
    display: block;
  }

  span {
    margin-top: 4rem;
    font-size: 0.7rem;
  }

  h5 {
    margin-top: 0.3rem;
  }
  
  button {
    width: 100%;
    margin-top: 1rem;
    padding: 0.3rem;

    color: var(--shape);
    background: ${props => props.buttonBackground};
    border: 0;
    border-radius: 5px;

    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.8);
    }
  }
`