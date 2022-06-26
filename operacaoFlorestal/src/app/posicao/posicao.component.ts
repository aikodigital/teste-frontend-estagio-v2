import { Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-posicao',
  templateUrl: './posicao.component.html',
  styleUrls: ['./posicao.component.css']
})
export class PosicaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const map = new Map('map').setView([32.339444, -6.360833], 15);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);
    const makerItem = marker([-19.151801, -46.007759]).addTo(map).bindPopup("CA-0001 - 2021-02-28T17:00:00.000Z");
    map.fitBounds([
      [makerItem.getLatLng().lat, makerItem.getLatLng().lng]
    ]);
    const makerItem_ = marker([-19.210242, -45.935256]).addTo(map).bindPopup("CA-0001 - 2021-02-28T08:00:00.000Z");
    map.fitBounds([
      [makerItem_.getLatLng().lat, makerItem_.getLatLng().lng]
    ]);
    const makerItem_1 = marker([-19.120069, -46.096718]).addTo(map).bindPopup("CA-0001 - 2021-02-27T22:00:00.000Z");
    map.fitBounds([
      [makerItem_1.getLatLng().lat, makerItem_1.getLatLng().lng]
    ]);
    const makerItem1 = marker([-19.195811, -45.825157]).addTo(map).bindPopup("CA-0002 - 2021-02-28T16:00:00.000Z");
    map.fitBounds([
      [makerItem1.getLatLng().lat, makerItem1.getLatLng().lng]
    ]);
    const makerItem1_ = marker([-19.090774, -45.979632]).addTo(map).bindPopup("CA-0002 - 2021-02-28T02:00:00.000Z");
    map.fitBounds([
      [makerItem1_.getLatLng().lat, makerItem1_.getLatLng().lng]
    ]);
    const makerItem1_1 = marker([-19.070461, -45.987438]).addTo(map).bindPopup("CA-0002 - 2021-02-27T17:00:00.000Z");
    map.fitBounds([
      [makerItem1_1.getLatLng().lat, makerItem1_1.getLatLng().lng]
    ]);
    const makerItem2 = marker([-19.134644, -46.087206]).addTo(map).bindPopup("CA-0003 - 2021-03-01T00:00:00.000Z");
    map.fitBounds([
      [makerItem2.getLatLng().lat, makerItem2.getLatLng().lng]
    ]);
    const makerItem2_ = marker([-19.150078, -46.023285]).addTo(map).bindPopup("CA-0003 - 2021-02-28T23:00:00.000Z");
    map.fitBounds([
      [makerItem2_.getLatLng().lat, makerItem2_.getLatLng().lng]
    ]);
    const makerItem2_1 = marker([-19.2368, -46.032909]).addTo(map).bindPopup("CA-0003 - 2021-02-28T20:00:00.000Z");
    map.fitBounds([
      [makerItem2_1.getLatLng().lat, makerItem2_1.getLatLng().lng]
    ]);
    const makerItem3 = marker([-18.978732, -45.918204]).addTo(map).bindPopup("CA-0004 - 2021-03-01T00:00:00.000Z");
    map.fitBounds([
      [makerItem3.getLatLng().lat, makerItem3.getLatLng().lng]
    ]);
    const makerItem3_ = marker([-19.065245, -45.824457]).addTo(map).bindPopup("CA-0004 - 2021-02-28T10:00:00.000Z");
    map.fitBounds([
      [makerItem3_.getLatLng().lat, makerItem3_.getLatLng().lng]
    ]);
    const makerItem3_1 = marker([-19.091588, -45.921781]).addTo(map).bindPopup("CA-0004 - 2021-02-28T02:00:00.000Z");
    map.fitBounds([
      [makerItem3_1.getLatLng().lat, makerItem3_1.getLatLng().lng]
    ]);
    const makerItem4 = marker([-19.027071, -46.004085]).addTo(map).bindPopup("HV-1001 - 2021-02-28T21:00:00.000Z");
    map.fitBounds([
      [makerItem4.getLatLng().lat, makerItem4.getLatLng().lng]
    ]);
    const makerItem4_ = marker([-19.151956, -45.877769]).addTo(map).bindPopup("HV-1001 - 2021-02-28T12:00:00.000Z");
    map.fitBounds([
      [makerItem4_.getLatLng().lat, makerItem4_.getLatLng().lng]
    ]);
    const makerItem4_1 = marker([-19.119932, -45.969046]).addTo(map).bindPopup("HV-1001 - 2021-02-27T23:00:00.000Z");
    map.fitBounds([
      [makerItem4_1.getLatLng().lat, makerItem4_1.getLatLng().lng]
    ]);
    const makerItem5 = marker([-19.287676, -46.082552]).addTo(map).bindPopup("HV-1002 - 2021-02-28T21:00:00.000Z");
    map.fitBounds([
      [makerItem5.getLatLng().lat, makerItem5.getLatLng().lng]
    ]);
    const makerItem5_ = marker([-19.318803, -46.012331]).addTo(map).bindPopup("HV-1002 - 2021-02-28T08:00:00.000Z");
    map.fitBounds([
      [makerItem5_.getLatLng().lat, makerItem5_.getLatLng().lng]
    ]);
    const makerItem5_1 = marker([-19.245147, -45.979376]).addTo(map).bindPopup("HV-1002 - 2021-02-28T07:00:00.000Z");
    map.fitBounds([
      [makerItem5_1.getLatLng().lat, makerItem5_1.getLatLng().lng]
    ]);
    const makerItem6 = marker([-19.091692, -46.14889]).addTo(map).bindPopup("GT-2001 - 2021-02-28T12:00:00.000Z");
    map.fitBounds([
      [makerItem6.getLatLng().lat, makerItem6.getLatLng().lng]
    ]);
    const makerItem6_ = marker([-19.091097, -46.127557]).addTo(map).bindPopup("GT-2001 - 2021-02-28T03:00:00.000Z");
    map.fitBounds([
      [makerItem6_.getLatLng().lat, makerItem6_.getLatLng().lng]
    ]);
    const makerItem6_1 = marker([-19.204608, -46.080849]).addTo(map).bindPopup("GT-2001 - 2021-02-27T14:00:00.000Z");
    map.fitBounds([
      [makerItem6_1.getLatLng().lat, makerItem6_1.getLatLng().lng]
    ]);
    const makerItem7 = marker([-19.172475, -46.080028]).addTo(map).bindPopup("GT-2002 - 2021-03-01T00:00:00.000Z");
    map.fitBounds([
      [makerItem7.getLatLng().lat, makerItem7.getLatLng().lng]
    ]);
    const makerItem7_ = marker([-19.152431, -46.078027]).addTo(map).bindPopup("GT-2002 - 2021-02-28T20:00:00.000Z");
    map.fitBounds([
      [makerItem7_.getLatLng().lat, makerItem7_.getLatLng().lng]
    ]);
    const makerItem7_1 = marker([-19.164433, -46.032432]).addTo(map).bindPopup("GT-2002 - 2021-02-28T15:00:00.000Z");
    map.fitBounds([
      [makerItem7_1.getLatLng().lat, makerItem7_1.getLatLng().lng]
    ]);
    const makerItem8 = marker([-19.163073, -46.06338]).addTo(map).bindPopup("GT-2003 - 2021-03-01T01:00:00.000Z");
    map.fitBounds([
      [makerItem8.getLatLng().lat, makerItem8.getLatLng().lng]
    ]);
    const makerItem8_ = marker([-19.206035, -46.134076]).addTo(map).bindPopup("GT-2003 - 2021-02-28T10:00:00.000Z");
    map.fitBounds([
      [makerItem8_.getLatLng().lat, makerItem8_.getLatLng().lng]
    ]);
    const makerItem8_1 = marker([-19.287383, -46.000334]).addTo(map).bindPopup("GT-2003 - 2021-02-27T22:00:00.000Z");
    map.fitBounds([
      [makerItem8_1.getLatLng().lat, makerItem8_1.getLatLng().lng]
    ]);
  }

}
