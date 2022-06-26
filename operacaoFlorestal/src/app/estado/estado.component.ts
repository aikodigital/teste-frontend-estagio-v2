import { Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const map = new Map('map').setView([32.339444, -6.360833], 15);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);
    const makerItem = marker([-19.151801, -46.007759]).addTo(map).bindPopup("CA-0001 -> Operando");
    map.fitBounds([
      [makerItem.getLatLng().lat, makerItem.getLatLng().lng]
    ]);
    const makerItem1 = marker([-19.195811, -45.825157]).addTo(map).bindPopup("CA-0002 -> Operando");
    map.fitBounds([
      [makerItem1.getLatLng().lat, makerItem1.getLatLng().lng]
    ]);
    const makerItem2 = marker([-19.134644, -46.087206]).addTo(map).bindPopup("CA-0003 -> Operando");
    map.fitBounds([
      [makerItem2.getLatLng().lat, makerItem2.getLatLng().lng]
    ]);
    const makerItem3 = marker([-18.978732, -45.918204]).addTo(map).bindPopup("CA-0004 -> Operando");
    map.fitBounds([
      [makerItem3.getLatLng().lat, makerItem3.getLatLng().lng]
    ]);
    const makerItem4 = marker([-19.027071, -46.004085]).addTo(map).bindPopup("HV-1001 -> Manutenção");
    map.fitBounds([
      [makerItem4.getLatLng().lat, makerItem4.getLatLng().lng]
    ]);
    const makerItem5 = marker([-19.287676, -46.082552]).addTo(map).bindPopup("HV-1002 -> Operando");
    map.fitBounds([
      [makerItem5.getLatLng().lat, makerItem5.getLatLng().lng]
    ]);
    const makerItem6 = marker([-19.091692, -46.14889]).addTo(map).bindPopup("GT-2001 -> Operando");
    map.fitBounds([
      [makerItem6.getLatLng().lat, makerItem6.getLatLng().lng]
    ]);
    const makerItem7 = marker([-19.172475, -46.080028]).addTo(map).bindPopup("GT-2002 -> Operando");
    map.fitBounds([
      [makerItem7.getLatLng().lat, makerItem7.getLatLng().lng]
    ]);
    const makerItem8 = marker([-19.163073, -46.06338]).addTo(map).bindPopup("GT-2003 -> Operando");
    map.fitBounds([
      [makerItem8.getLatLng().lat, makerItem8.getLatLng().lng]
    ]);
  }

}
