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
                        <img src="https://factoringplus.ru/images/logo.svg" alt=""/>
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
            </Row>
            <Row style={{height:100}}></Row>
            <Row>
              <Col>
              <Stepper steps={ [{title: 'Общие данные'}, {title: 'Запрос лимита'}] } activeStep={ 1 } />
                <br/>
              </Col>
            </Row>
              <Col>
                <h1>Запрос лимита</h1><br/><br/><br/>
                { 
                  this.props.debitors.map(item => {
                  return <Form>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Покупатель</Form.Label>
                          <Suggest placeholder="ИНН или наименование компании" callback={this.setData} method="party" value={item.name}/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Лимит (руб.)</Form.Label>
                          <Form.Control type="text" value={(Math.floor(Math.random() * 15000000) + 1000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Отсрочка (калед. дней)</Form.Label>
                          <Form.Control type="text"/>
                          <Form.Group>
                              <input type="checkbox" id="claims"/>
                              <label>&nbsp;&nbsp;&nbsp;Банковских дней</label>
                          </Form.Group>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label> .</Form.Label><br/>
                        <Button variant="warning">Загрузить скан</Button>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label> .</Form.Label><br/>
                        <Button variant="outline-danger">X</Button>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
                })}
              </Col>
            </Row>
            <Row>
                <Col>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <Link to="/step4">
                      <Button variant="primary">Отправить на согласование</Button>
                    </Link>
                  </div>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step3;