import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { MainRoutes } from './routes';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <main>
        <Aside />
        <MainRoutes />
      </main>
    </div>
  );
}

export default App;
