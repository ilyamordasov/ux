import React from 'react';
import {Link} from "react-router-dom";

import Stepper from 'react-stepper-horizontal';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Form,InputGroup} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

import { format } from 'date-fns'

import Suggest from './Suggest';

class Step3 extends React.Component {
  
    constructor(props) {
      super(props);
      
      this.state = {
        company: {},
        email: this.props.email,
        flag: false
      };
    }

    setData = (value) => {
      this.setState({flag:true});
      this.setState({company:value.data});
    };
  
    render() {
      return (
        <Container className="p-3">
            <Row style={{height:100}}>
                <Col>
                <Link to="/">
                        <img src="https://factoringplus.ru/images/logo.svg"></img>
                    </Link>
                </Col>
                <Col style={{right:0}}>
                  <label>{this.state.email}</label>
                  <br/><br/>
                  <Form.Group style={{width:300}}>
                    <Form.Label>Предоставить доступ для заполнения</Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Prepend>
                        <InputGroup.Text>⎘</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control type="text" value="http://fplus.ru/jsd64d" />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col>
                  <Link to="/form0">
                    <Button variant="light">
                        Закончить позже
                    </Button>
                  </Link>
                </Col>
            </Row>
            <Row style={{height:100}}></Row>
            <Row>
              <Col>
              <Stepper steps={ [{title: 'Общие данные', href: '/step2'}, {title: 'Банки, в которых открыты р/с компании'}, {title: 'Руководитель организации'}, {title: 'Учредители организации'}] } activeStep={ 1 } />
                <br/>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Банки, в которых открыты расчетные счета компании</h1><br/><br/><br/>
                <Form>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Наименование банка</Form.Label>
                          <Suggest placeholder="Введите название, БИК, SWIFT или ИНН" callback={this.setData} method="bank"/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>БИК</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.bic : ""} disabled/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Номер корр. счета</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.correspondent_account : ""} disabled/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Номер расчетного счета</Form.Label>
                          <Form.Control type="text" value=""/>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Label> </Form.Label><br/>
                      <Button variant="light">+</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <Row>
                <Col>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <Link to="/step4">
                      <Button variant="primary">Далее</Button>
                    </Link>
                  </div>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step3;