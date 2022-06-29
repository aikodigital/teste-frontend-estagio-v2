import equipment from "./data/equipment.json" assert { type: "json" };
import equipmentModel from "./data/equipmentModel.json" assert { type: "json" };
import equipmentPositionHistory from "./data/equipmentPositionHistory.json" assert { type: "json" };
import equipmentState from "./data/equipmentState.json" assert { type: "json" };
import equipmentStateHistory from "./data/equipmentStateHistory.json" assert { type: "json" };

const equip = equipment;
const equipModel = equipmentModel;
const equipPositionHistory = equipmentPositionHistory;
const equipState = equipmentState;
const equipStateHistory = equipmentStateHistory;

console.log(equip);

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com.br/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      const map = L.map("map").setView(coords, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup("Descubra se um equipamento está operando ou quebrado")
        .openPopup();
    },
    function () {
      alert("Não foi possível acessar sua posição!");
    }
  );
