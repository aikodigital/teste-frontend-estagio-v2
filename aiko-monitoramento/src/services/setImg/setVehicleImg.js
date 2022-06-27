import Cargo from "../../assets/img/vehicles/cargo.png"
import Craw from "../../assets/img/vehicles/craw.png"
import Harvester from "../../assets/img/vehicles/harvester.png"

const modelImg = (name) => {
  switch (name) {
    case "Caminhão de carga":
      return Cargo
    case "Garra traçadora":
      return Craw
    case "Harvester":
      return Harvester
    default:
      return ""
  }
}

export default modelImg