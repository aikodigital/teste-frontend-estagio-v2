
import "./style.css"
import equip from "../data/equipment.json"
import historyPosition from "../data/equipmentPositionHistory.json"
import state from "../data/equipmentState.json"
import stateHistory from "../data/equipmentStateHistory.json"

  document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <div id="map"></div>
`

  const equipament = new Object(equip)
  const equipPositionHistory = new Object(historyPosition)
  const stateEquipHistory = new Object(stateHistory)
  const stateEquip = new Object(state)
               
  function searchHistoryEquipment(equip) {
    let items = []
    equipPositionHistory.filter((item) => item.equipmentId === equip.id).map(equipament => {
          equipament.positions.forEach((value) => items.push({
              equipmentId: equipament.equipmentId,
              equip: equip.name,
              date: value.date,
              positions: [value.lat, value.lon],
              
          }))
      })
      return items
    }

  function maxDateEquipament(equipament) {
      const maxDate = new Date(
            Math.max(
            ...equipament.map(element => {
              return new Date(element.date);
          }),
        ))
        return maxDate
      }

  function equipmentPositionHistory(equipament, recentDate) {
        const equipment = equipament.find((element) => {
          const date = new Date(element.date)
            return date.getTime() === recentDate.getTime()
        })
        return equipment
      }

  function equipmentStateHistory(equipament) {
    const equip = stateEquipHistory.filter(item => item.equipmentId === equipament.equipmentId)
    const equipStates = {...equipament, states: equip[0].states}
      return equipStates
    }
    
      
  function switchStates(equipmentStateId) {
    switch (equipmentStateId) {
      case stateEquip[0].id: 
        return stateEquip[0].name

      case stateEquip[1].id: 
        return stateEquip[1].name

      case stateEquip[2].id: 
        return stateEquip[2].name
    
      default:
        break;
    }
  }

  function formatDate(date) {
    const splitDate = date.split("T")
    const dateStr   = splitDate[0].split("-")
    const hourStr   = splitDate[1].split(".")
    const formateDate = `${dateStr[2]}/${dateStr[1]}/${dateStr[0]} ${hourStr[0]}`
    return formateDate
  }

  const equipamentCA0001 = searchHistoryEquipment(equipament[0])
  const equipamentCA0002 = searchHistoryEquipment(equipament[1])
  const equipamentCA0003 = searchHistoryEquipment(equipament[2])
  const equipamentCA0004 = searchHistoryEquipment(equipament[3])
  const equipamentHV1001 = searchHistoryEquipment(equipament[4])
  const equipamentHV1002 = searchHistoryEquipment(equipament[5])
  const equipamentGT2001 = searchHistoryEquipment(equipament[6])
  const equipamentGT2002 = searchHistoryEquipment(equipament[7])
  const equipamentGT2003 = searchHistoryEquipment(equipament[8])

  const recentDatePositionCA0001 = maxDateEquipament(equipamentCA0001)
  const recentDatePositionCA0002 = maxDateEquipament(equipamentCA0002)
  const recentDatePositionCA0003 = maxDateEquipament(equipamentCA0003)
  const recentDatePositionCA0004 = maxDateEquipament(equipamentCA0004)
  const recentDatePositionHV1001 = maxDateEquipament(equipamentHV1001)
  const recentDatePositionHV1002 = maxDateEquipament(equipamentHV1002)
  const recentDatePositionGT2001 = maxDateEquipament(equipamentGT2001)
  const recentDatePositionGT2002 = maxDateEquipament(equipamentGT2002)
  const recentDatePositionGT2003 = maxDateEquipament(equipamentGT2003)

  const obj  = equipmentStateHistory( equipmentPositionHistory(equipamentCA0001, recentDatePositionCA0001))
  const obj2 = equipmentStateHistory( equipmentPositionHistory(equipamentCA0002, recentDatePositionCA0002))
  const obj3 = equipmentStateHistory( equipmentPositionHistory(equipamentCA0003, recentDatePositionCA0003))
  const obj4 = equipmentStateHistory( equipmentPositionHistory(equipamentCA0004, recentDatePositionCA0004))
  const obj5 = equipmentStateHistory( equipmentPositionHistory(equipamentHV1001, recentDatePositionHV1001))
  const obj6 = equipmentStateHistory( equipmentPositionHistory(equipamentHV1002, recentDatePositionHV1002))
  const obj7 = equipmentStateHistory( equipmentPositionHistory(equipamentGT2001, recentDatePositionGT2001))
  const obj8 = equipmentStateHistory( equipmentPositionHistory(equipamentGT2002, recentDatePositionGT2002))
  const obj9 = equipmentStateHistory( equipmentPositionHistory(equipamentGT2003, recentDatePositionGT2003))

  const arr = [obj, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9]
      

    //                      ------------------------------------------ LEAFLET MAP -------------------------------------------------
      var markIcon = L.icon ({
          iconUrl: "https://images.vexels.com/media/users/3/246009/isolated/lists/f96e9666ed2f65e51ae7ca54c3520c47-ranchfarmdecor-icons-1.png",
          iconSize: [34, 34],
          iconAnchor: [10, 12],
          popupAnchor: [0, -26]
      });

      var map = L.map("map").setView([-19.151801, -46.007759], 6.0);
      L.tileLayer("https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=apwvrZyb3B04iVJ5ky5e", {
          attribution: "<a href='https://www.maptiler.com/copyright/' target='_blank'>&copy; MapTiler</a> <a href='https://www.openstreetmap.org/copyright' target='_blank'>&copy; OpenStreetMap contributors</a>",
      }).addTo(map);

      arr.map(element => {
        const stateColor = switchStates(element.states[element.states.length - 1].equipmentStateId)

        var marker = L.marker(element.positions, {icon:markIcon}).addTo(map);
      
        marker.bindPopup(`Data mais recente: <strong>${formatDate(element.date)}</strong><br>
        Estado atual do equipamento: <strong>${switchStates(element.states[element.states.length - 1].equipmentStateId)}</strong><br>
        <br>${element.states.map(state => `<strong>${switchStates(state.equipmentStateId)}:</strong> ${formatDate(state.date)}<br>`).join(" ")}`,

         {className: (stateColor === "Manutenção" || stateColor === "Parado")  ? "popupCustom2" : "popupCustom"}
        
        );
      })

      
