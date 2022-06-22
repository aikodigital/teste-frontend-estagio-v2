import './style.css'
import aikoLogo from '../../assets/img/aiko.png';
import { Link } from 'react-router-dom';


function Navbar(){
    return (
        <nav className='navbar navbar-expand-lg'>
            <div>
                <Link to="/"><img src={aikoLogo} alt='' className='logo'/></Link>
            </div>
        </nav>
    )
}

export default Navbar;