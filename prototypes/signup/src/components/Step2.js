import React from 'react';
import {Link} from "react-router-dom";

import Stepper from 'react-stepper-horizontal';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Form,InputGroup} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import Suggest from '../components/Suggest';

class Step2 extends React.Component {
  
    constructor(props) {
      super(props);
      console.log(this.props.client);
      this.state = {
        company: {},
        email: this.props.email,
        flag: false,
        isEmpty: false,
        DoB: new Date()
      };

      if (Object.keys(this.props.client).length === 0 && this.props.client.constructor === Object) {
        this.state.isEmpty = true;
      }
    }

    setData = (value) => {
      this.setState({flag:true});
      this.setState({company:value.data});
      console.log(value)
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
                          <Suggest placeholder="ИНН или наименование компании" callback={this.setData} method="party" value={this.state.isEmpty ? '' : this.props.client.data.value} color="false"/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Юридический адрес</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.address.unrestricted_value : this.state.isEmpty ? '' : this.props.client.data.data.address.unrestricted_value}/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Адрес фактического местонахождения</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.address.unrestricted_value : this.state.isEmpty ? '' : this.props.client.data.data.address.unrestricted_value}/>
                          <input type="checkbox" id="claims" checked/>
                          <label>&nbsp;&nbsp;&nbsp;Совпадает с юридическим адресом</label>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <Row style={{height:50}}></Row>
            <Row>
              <Col>
                <Form>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>ФИО руководителя</Form.Label>
                          <Suggest placeholder="Введите полность Фамилию, Имя и Отчество" callback={this.setData} method="fio" value={this.state.flag ? this.state.company.data.management.name : this.state.isEmpty ? '' : this.props.client.data.data.management.name} color="false"/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Должность руководителя</Form.Label>
                          <Form.Control type="text" value={this.state.flag ? this.state.company.data.management.post : this.state.isEmpty ? '' : this.props.client.data.data.management.post}/>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Дата рождения</Form.Label><br/>
                          <DatePicker onChange={date => {this.setState({DoB: date})}} customInput={<Form.Control type="text" value=""/>} dateFormat="dd.MM.yyyy"/>
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
                      <Button variant="primary">Все верно?</Button>
                    </Link>
                  </div>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step2;