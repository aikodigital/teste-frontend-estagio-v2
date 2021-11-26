import './NavBarComponent.css';
import aiko_logo from '../../img/aiko.png';

function NavBarComponent() {
  return (

    <h1 className="header" >
      <img className="logo" src={aiko_logo} alt='' />
      AEMS - Aiko Equipment Monitoring System
    </h1>
  );
}

export default NavBarComponent;
