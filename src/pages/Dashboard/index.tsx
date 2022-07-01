import { useEquipments } from "../../hooks/useEquipments";
import { Map } from "../../components/Map";
import { Container } from './styles';

import aikoLogo from '../../assets/aiko.png'

interface IDashboardProps {
  openEquipmentInfoModal: () => void
}

const Dashboard = ({ openEquipmentInfoModal }: IDashboardProps) => {
  const { equipments } = useEquipments();

  return (
    <Container>
      <img src={aikoLogo} alt="aiko-Logo" />
      <Map equipments={equipments} openEquipmentInfoModal={openEquipmentInfoModal}/>
    </Container>
  )
}

export default Dashboard;