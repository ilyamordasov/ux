import React from 'react';
import {Link} from "react-router-dom";

import Stepper from 'react-stepper-horizontal';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Form,InputGroup} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { format } from 'date-fns'

import Suggest from './Suggest';

import '../App.css';

class Step4 extends React.Component {
  
    constructor(props) {
      super(props);

      this.state = {
        company: {},
        email: this.props.email,
        flag: false,
        DoB: new Date(),
        DoE: new Date(),
        isEmpty:false,
      };

      if (Object.keys(this.props.client).length === 0 && this.props.client.constructor === Object) {
        this.state.isEmpty = true;
      }
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
              <Stepper steps={ [{title: 'Общие данные', href: '/step2'}, {title: 'Банки, в которых открыты р/с компании', href: '/step3'}, {title: 'Руководитель организации'}, {title: 'Учредители организации'}] } activeStep={ 2 } />
                <br/>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Руководитель организации</h1><br/><br/><br/>
                <Form>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>ФИО</Form.Label>
                          <Suggest placeholder="Введите полность Фамилию, Имя и Отчество" callback={this.setData} method="fio" value={this.state.isEmpty ? '' : this.props.client.data.data.management.name}/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Должность</Form.Label>
                          <Form.Control type="text" value={this.state.isEmpty ? '' : this.props.client.data.data.management.post}/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Дата рождения</Form.Label><br/>
                          <DatePicker onChange={date => {this.setState({DoB: date})}} customInput={<Form.Control type="text" value=""/>} dateFormat="dd.MM.yyyy"/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br/><h4>Паспортные данные</h4><br/>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Серия и номер паспорта</Form.Label>
                          <Form.Control type="text" value=""/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Дата выдачи</Form.Label><br/>
                          <DatePicker onChange={date => {this.setState({DoE: date})}} customInput={<Form.Control type="text" value=""/>} dateFormat="dd.MM.yyyy"/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Адрес регистрации</Form.Label>
                          <Form.Control type="text" value=""/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Адрес проживания</Form.Label>
                          <Form.Control type="text" value=""/>
                          <input type="checkbox" id="claims" checked/>
                          <label>&nbsp;&nbsp;&nbsp;Совпадает с адресом регистрации</label>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <Row>
                <Col>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <Link to="/step5">
                      <Button variant="primary">Далее</Button>
                    </Link>
                  </div>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step4;