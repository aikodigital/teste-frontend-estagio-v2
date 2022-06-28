import { useState } from 'react'
import './Modal.css'
import Details from '../Details/Details'
import historicos from '../../../../data/equipmentPositionHistory.json'
import equipmentStateHistory from '../../../../data/equipmentStateHistory.json'

const positions = (equipmentIndex: number) => historicos[equipmentIndex].positions
const states = (equipmentIndex: number) => equipmentStateHistory[equipmentIndex].states

export default function Modal({equipment}:string[]){
  const listaPositions = positions(equipment.indice)
  const listaStates = states(equipment.indice)
  const [modal, setModal] = useState(false);
  const leafletPopup = document.querySelector('.leaflet-popup-close-button')
  const leafletPopupContainer = document.querySelector('.leaflet-popup-tip-container')
  

  const toggleModal = () => {
    setModal(!modal)
  }
  if (modal) {
    document.body.classList.add('active-modal')
    leafletPopup.classList.add('show')
    leafletPopupContainer.classList.add('show')
  } else {
    document.body.classList.remove('active-modal')
    leafletPopup.classList.remove('show')
    leafletPopupContainer.classList.remove('show')
  }
  
  return(
    <>
      <button className="btn-modal" onClick={toggleModal}>
        mais informações
      </button>
      {modal && (
      <div className="modal">
        <div className="modal-content">
          <h1>
            {equipment.modelo} - {equipment.name}
          </h1>
          {listaPositions.map((position, indice) => {
            const estado = listaStates[indice].equipmentStateId
            return (
              <Details key={indice} position={{indice, estado, ...position}}/>)}
              )}
          <button className='close-modal fixed' onClick={toggleModal}>fechar</button>
        </div>
      </div>
      )}
    </>

  )
}