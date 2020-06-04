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
import Step3 from "./components/Step3";

export default function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/step3">
            <Step3 />
          </Route>
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
        <div><span>{process.env.REVIEW_ID}</span></div>
      </div>
      <div style={{position: "fixed", right:40, bottom:40, backgroundColor: "#ff0000", width:72, height:72, borderRadius:100, textAlign:"center"}}><img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/chat-2-icon.png" style={{width:"100%", height:"100%"}}/></div>
    </Router>
  );
}