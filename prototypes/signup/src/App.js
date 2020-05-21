import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Form0 from "./components/Form0";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

export default function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/step2">
            <Step2 />
          </Route>
          <Route path="/step1/:email">
            <Step1 />
          </Route>
          <Route path="/">
            <Form0 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}