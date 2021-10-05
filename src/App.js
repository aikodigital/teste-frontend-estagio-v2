import React from 'react'
import { Switch, Route } from 'react-router-dom';
import MainPage from './page/MainPage'
import History from './page/History'
import './App.css';

function App() {
  return (
    <main>
    <Switch>
      <Route exact path="/" component={ MainPage } />
      <Route exact path="/history" component={ History } />
    </Switch>
    </main>
  );
}

export default App;
