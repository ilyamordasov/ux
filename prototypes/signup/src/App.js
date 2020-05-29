import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Form1 from "./components/Form1";
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
            <Form1 />
          </Route>
        </Switch>
      </div>
      <div style={{position: "fixed", right:20, bottom:20, backgroundColor: "#ff0000", width:72, height:72, borderRadius:100, textAlign:"center"}}><img src="https://images.assetsdelivery.com/compings_v2/vectorv/vectorv1912/vectorv191211128.jpg" style={{width:"100%", height:"100%"}}/></div>
    </Router>
  );
}