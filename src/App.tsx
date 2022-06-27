import { useState } from 'react';
import { EquipmentProvider } from './hooks/useEquipments';

import Modal from 'react-modal';
import Dashboard from './pages/Dashboard';
import EquipmentInfoModal from './components/EquipmentInfoModal';

import GlobalStyles from './styles/global';

Modal.setAppElement('#root');

const App: React.FC = () => {
  const [equipmentInfoModalIsOpen, setEquipmentInfoModalIsOpen] = useState(false);

  function handleOpenEquipmentInfoModal() {
    setEquipmentInfoModalIsOpen(true)
  }

  function handleCloseEquipmentInfoModal() {
    setEquipmentInfoModalIsOpen(false)
  }

  return (
    <EquipmentProvider>
      <GlobalStyles />
      <EquipmentInfoModal 
        isOpen={equipmentInfoModalIsOpen} 
        onRequestClose={handleCloseEquipmentInfoModal}
      />
      <Dashboard openEquipmentInfoModal={handleOpenEquipmentInfoModal}/>
    </EquipmentProvider>
  )
}

export default App;
