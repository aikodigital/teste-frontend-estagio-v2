import { Map } from '../../components/Map';
import classes from './styles.module.css';

export function Main() {
  return (
    <div className={classes.container}>
      <Map />
    </div>
  );
}
