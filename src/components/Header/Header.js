import React from 'react';
import './Header.css';
import img from '../../img/aiko.png';

export const Header = () => {
  return (
    <div className='header'>
      <img src={img} alt='imagem aiko' />
    </div>
  )
}
