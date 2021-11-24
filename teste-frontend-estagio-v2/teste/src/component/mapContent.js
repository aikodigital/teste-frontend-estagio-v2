import logo from './logo.svg';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import './App.css';

export class MapContainer extends Component {

  render() {
    return (

      <Map
        google={this.props.google}
        zoom={7}
        initialCenter={{ lat: -27.0922364, lng: -52.6166878 }}
      >
      </Map>

    );
  }
}
export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyBUcIaQKpKV5IMB3vw6Xn_LUFOennQa1RE',
  }
))(MapContainer)