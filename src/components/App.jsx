import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import GrowsView from "../views/GrowsView";
import StrainsView from "../views/StrainsView";

/**
 * The main component of the application. Houses the router as well as the navbar.
 *
 * @author Marko Maric
 * @version 1.0
 */
const App = () => {
  return (
    <div className="application-wrapper">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/grows">
            <GrowsView />
          </Route>
          <Route exact path="/strains">
            <StrainsView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
