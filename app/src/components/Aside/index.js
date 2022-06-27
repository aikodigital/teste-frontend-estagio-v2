import { Link } from 'react-router-dom';

import classes from './styles.module.css';
export function Aside() {
  return (
    <aside className={classes.container}>
      <h1>Dashboard</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Map</Link>
          </li>
          <li>
            <Link to="/equipments">Equipments</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
