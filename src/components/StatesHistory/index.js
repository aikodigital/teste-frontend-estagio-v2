import { useParams } from 'react-router-dom'
import { EquipmentHistoryCard } from '../EquipmentHistoryCard'

export function StatesHistory() {
  const params = useParams() // pega o id do equipamento mandado pela url
  return (
    <>
      <EquipmentHistoryCard equipmentId={params.equipmentId} />
    </>
  )
}
