import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SSI from "./components/SSI";
import Distraint from "./components/Distraint";
import Final from "./components/Final";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/ssi' component={SSI} />
            <Route exact path='/distraint' component={Distraint} />
            <Route exact path='/final' component={Final} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
