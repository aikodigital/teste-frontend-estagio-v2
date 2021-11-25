import './NavBarComponent.css';
import aiko_logo from '../../img/aiko.png';

function NavBarComponent() {
  return (
    
    <h1 className="header" >
        
       <img className="logo" src= {aiko_logo }/>
       
       DESAFIO AIKO : GESTÃO DE FROTA
    </h1>
  );
}

export default NavBarComponent;
