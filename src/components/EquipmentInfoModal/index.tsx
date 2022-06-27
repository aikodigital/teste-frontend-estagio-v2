import Modal from 'react-modal';

import { StateList } from './StateHistoryList';

import closeImg from '../../assets/close.svg';
import { useEquipments } from '../../hooks/useEquipments';

interface IEquipmentInfoModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

const EquipmentInfoModal = ({ isOpen, onRequestClose }: IEquipmentInfoModalProps) => {
  const { equipmentModalData } = useEquipments();

  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button type='button' onClick={onRequestClose} className="react-modal-close">
          <img src={closeImg} alt="Close Modal" />
      </button>

      <h3>{equipmentModalData.equipmentName}</h3>
      <strong>Status: {equipmentModalData.state?.name}</strong>

      <StateList equipmentModalData={equipmentModalData}/>
  
    </Modal>
  )
}

export default EquipmentInfoModal;