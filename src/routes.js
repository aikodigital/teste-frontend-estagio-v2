import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Map from "./views/MainMap";
import Equipments from "./views/Equipments";
import Equipment from "./views/HistoricEquipment";
import NotFound from "./views/NotFound";

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/equipments" />
      </Route>
      <Route path="/recent" component={Map} />
      <Route path="/equipments" exact component={Equipments} />
      <Route path="/equipment/:id" component={Equipment} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default MainRoutes;
