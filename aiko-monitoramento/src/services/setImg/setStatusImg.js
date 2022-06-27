import Operating from "../../assets/img/status/operating.png"
import Maintenance from "../../assets/img/status/maintenance.png"
import Paused from "../../assets/img/status/paused.png"

const setStatusImg = (currentState) => {
  switch (currentState) {
    case "Operando":
      return Operating
    case "Parado":
      return Paused
    case "Manutenção":
      return Maintenance
    default:
      return ""
  }
}

export default setStatusImg