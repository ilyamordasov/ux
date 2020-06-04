import React from 'react';
import {Link} from "react-router-dom";

import Stepper from 'react-stepper-horizontal';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Form,InputGroup} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

import { format } from 'date-fns'

import Suggest from '../components/Suggest';

class Step2 extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        company: {},
        email: window.location.pathname.split("/")[2],
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
                    <img src="https://factoringplus.ru/images/logo.svg"></img>
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
              <Stepper steps={ [{title: 'Общие данные'}, {title: 'Банки, в которых открыты р/с компании'}, {title: 'Руководитель организации'}, {title: 'Учредители организации'}] } activeStep={ 0 } />
                <br/>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Общие данные</h1><br/><br/><br/>
                <Form>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Наименование компании</Form.Label>
                          <Suggest placeholder="ИНН или наименование компании" callback={this.setData} method="party"/>
                          <Form.Label>{this.state.flag ? this.state.company.data.name.full_with_opf : ""}</Form.Label>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Юридический адрес</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.address.unrestricted_value : ""}/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Адрес фактического местонахождения</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.address.unrestricted_value : ""}/>
                          <input type="checkbox" id="claims" checked/>
                          <label>&nbsp;&nbsp;&nbsp;Совпадает с юридическим адресом</label>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Организационно-правовая форма</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.opf.full : ""} disabled/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>ИНН компании</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.inn : ""} disabled/>
                      </Form.Group>
                    </Col>
                    <Col sm> 
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>ОГРН компании</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.ogrn : ""} disabled/>
                      </Form.Group>
                    </Col>
                    <Col sm> 
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>КПП компании</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.kpp : ""} disabled/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Код и наименование осн. вида деятельности</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.okved : ""} disabled/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="retypeBasicPassword">
                          <Form.Label>Чем именно занимается компания</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.okved : ""} disabled/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="retypeBasicPassword">
                          <Form.Label>Дата регистрации</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? format(new Date(this.state.company.data.state.registration_date), "dd.mm.yyyy") : ""} disabled/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Вебсайт</Form.Label>
                          <Form.Control type="text" value=""/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="retypeBasicPassword">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="text" value=""/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="retypeBasicPassword">
                          <Form.Label>Телефон</Form.Label>
                          <Form.Control type="text" value=""/>
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