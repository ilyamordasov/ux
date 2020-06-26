import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Form0 from "./components/Form0";
import Step0 from "./components/Step0";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Chat from './components/Chat';

export default function App() {
  const [client, setClient] = useState({});
  const [email, setEmail] = useState('');
  const [debitors, setDebitors] = useState([]);

  return (
    <Router>
      <div>

        <Switch>
          <Route path="/step4">
            <Step4 client={client} email={email} debitors={debitors}/>
          </Route>
          <Route path="/step3">
            <Step3 client={client} email={email} debitors={debitors}/>
          </Route>
          <Route path="/step2">
            <Step2 client={client} email={email} debitors={debitors}/>
          </Route>
          <Route path="/step1">
            <Step1 client={client} email={email} debitors={debitors}/>
          </Route>
          <Route path="/step0">
            <Step0 client={data => setClient(data)} email={val => setEmail(val)} debitors={data => setDebitors(data)}/>
          </Route>
          <Route path="/">
            <Form0 />
          </Route>
        </Switch>
      </div>
      <Chat />
      {/* <div style={{position: "fixed", right:40, bottom:40, backgroundColor: "#ff0000", width:72, height:72, borderRadius:100, textAlign:"center"}}><img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/chat-2-icon.png" style={{width:"100%", height:"100%"}}/></div> */}
    </Router>
  );
}