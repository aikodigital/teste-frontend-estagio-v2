import { Link } from 'react-router-dom';
import { Logo } from '../../assets/Logo';
import './styles.css';

export function Header() {
  return (
    <header className="header">
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
}
