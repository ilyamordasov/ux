import React,{useState} from "react";
import Stepper from 'react-stepper-horizontal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row,ListGroup} from 'react-bootstrap';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6';

function App() {
  const [client, setClient] = useState({});
  const [step, setStep] = useState(0);


  return (
    <Router>
      <div>
        <Stepper steps={ [{href: '/step1'},{href: '/step2'},{href: '/step3'},{href: '/step4'},{href: '/step5'}] } activeStep={ step }></Stepper>
        <Switch>
          <Row>
            <Col>
              <Route path="/step6">
                <Step6 client={client} step={data => setStep(data)}/>
              </Route>
              <Route path="/step5">
                <Step5 client={client} step={data => setStep(data)}/>
              </Route>
              <Route path="/step4">
                <Step4 client={client} step={data => setStep(data)}/>
              </Route>
              <Route path="/step3">
                <Step3 client={client} step={data => setStep(data)}/>
              </Route>
              <Route path="/step2">
                <Step2 client={client} step={data => setStep(data)}/>
              </Route>
              <Route path="/step1">
                <Step1 client={data => setClient(data)} step={data => setStep(data)}/>
              </Route>
            </Col>
            <Col xs lg="2">
              <CircularProgressbar value={step * 20} text={`${step * 20}%`} />
              <h4>Для заполнения анкеты вам понадобятся:</h4>
              <ListGroup as="ul">
                <ListGroup.Item as="li">Паспорт руководителя компании</ListGroup.Item>
                <ListGroup.Item as="li">Паспорта всех учредителей</ListGroup.Item>
                <ListGroup.Item as="li" disabled>Контактные данные Руководителя компании и Главного бухгалтера</ListGroup.Item>
                <ListGroup.Item as="li">Договора факторинга</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
