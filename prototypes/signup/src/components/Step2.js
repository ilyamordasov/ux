import React from 'react';
import {Link} from "react-router-dom";

import Stepper from 'react-stepper-horizontal';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Form} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

import Suggest from '../components/Suggest';

class Step2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inn: "",
        ogrn: "",
        email: window.location.pathname.split("/")[2]
      };
    }

    setData = (value) => {
      console.log(value.inn);
      this.setState({inn:value.inn, ogrn:value.ogrn});
    };
  
    render() {
      return (
        <Container className="p-3">
            <Row style={{height:100}}>
                <Col>
                    <img src="https://factoringplus.ru/images/logo.svg"></img>
                </Col>
                <Col style={{right:0}}>
                  <label>{this.state.email}</label>
                </Col>
                <Col>
                  <Link to="/form0">
                    <Button variant="light">
                        Закончить позже
                    </Button>
                  </Link>
                </Col>
            </Row>
            <Row>
              <Col>
              <Stepper steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}, {title: 'Step Four'}] } activeStep={ 0 } />
                <br/>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Информация о компании</h1><br/><br/><br/>
                <Form>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Наименование компании</Form.Label>
                          <Suggest placeholder="ИНН или наименование компании" callback={this.setData} method="party"/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>ИНН компании</Form.Label>
                          <Form.Control type="text" value={this.state.inn} disabled/>
                      </Form.Group>
                    </Col>
                    <Col sm> 
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>ОГРН компании</Form.Label>
                          <Form.Control type="text" value={this.state.ogrn} disabled/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>ФИО</Form.Label>
                          <Suggest placeholder="Иванов Иван Иванович" method="fio"/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="retypeBasicPassword">
                          <Form.Label>Ваша должность</Form.Label>
                          <Form.Control type="text" placeholder="Менеджер" />
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="retypeBasicPassword">
                          <Form.Label>Ваш номер телефона</Form.Label>
                          <Form.Control type="text" placeholder="+7 903 000 00 00" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <Row>
                <Col>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <Link to="/step3">
                      <Button variant="primary">Далее</Button>
                    </Link>
                  </div>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step2;