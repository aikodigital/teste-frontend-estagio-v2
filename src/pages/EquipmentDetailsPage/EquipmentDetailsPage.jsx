import { useLocation, useParams } from "react-router-dom"
import BackButton from "../../components/BackButton/BackButton"

import EquipmentDetails from '../../components/EquipmentDetails/EquipmentDetails'

function EquipmentDetailsPage() {
  const { id } = useParams()
  const { state } = useLocation()

  return (
    <>
      <BackButton to="/equipments" />
      <EquipmentDetails id={id} equipmentsData={state} />
    </>
  )
}

export default EquipmentDetailsPage
