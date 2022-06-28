import { useState } from 'react';

import './styles/global.scss';

import ReactModal from 'react-modal';

import { AppProvider } from './hooks';

import { Header } from './components/Header';
import { Map } from './components/Map';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';

ReactModal.setAppElement('#root');

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterOption, setFilterOption] = useState('');

  function handleOpenModal(){
    setIsModalOpen(true);
  }

  function handleCloseModal(){
    setIsModalOpen(false);
  }

  function handleFilterOption(option: string){
    if(option === 'Caminhão de carga'){
      if(filterOption === 'Caminhão de carga') {
        setFilterOption('');
      } else {
        setFilterOption('Caminhão de carga');
      }
    } else if(option === 'Harvester') {
      if(filterOption === 'Harvester') {
        setFilterOption('');
      } else {
        setFilterOption('Harvester');
      }
    } else if(option === 'Garra traçadora'){
      if(filterOption === 'Garra traçadora'){
        setFilterOption('');
      } else {
        setFilterOption('Garra traçadora');
      }
    } else {
      setFilterOption('');
    }
  }

  return (
    <AppProvider>
      <Header 
        filterOption={filterOption}
        handleFilterOption={handleFilterOption}
      />

      <Map 
        openModal={handleOpenModal}
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />

      <Footer />
    </AppProvider>
  );
}

export default App;