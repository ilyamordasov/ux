import React from 'react';
import {Link} from "react-router-dom";

import Stepper from 'react-stepper-horizontal';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Form,InputGroup} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import Toggle from 'react-toggle'

import { format } from 'date-fns'

import Suggest from './Suggest';

import '../App.css';
import '../Toggle.css';

class Step5 extends React.Component {
  
    constructor(props) {
      super(props);

      this.state = {
        company: {},
        email: this.props.email,
        flag: false,
        isUrik:false,
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

    handleToggleChange = (event) => {
      this.setState({isUrik: !this.state.isUrik});
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
              <Stepper steps={ [{title: 'Общие данные', href: '/step2'}, {title: 'Банки, в которых открыты р/с компании', href: '/step3'}, {title: 'Руководитель организации', href: '/step4'}, {title: 'Учредители организации'}] } activeStep={ 3 } />
                <br/>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Учредители организации</h1><br/><br/><br/>
                <Form style={{border: "1px #000 solid", padding:20}}>
                  <Row>
                    <Col sm>
                      <Toggle defaultChecked={this.state.isUrik} onChange={this.handleToggleChange} />&nbsp;&nbsp;
                      <label htmlFor='cheese-status'>Юридическое лицо?</label>
                    </Col>
                  </Row>
                  { !this.state.isUrik ?
                  <div>
                    <Row>
                      <Col sm>
                        <Form.Group controlId="">
                            <Form.Label>ФИО</Form.Label>
                            <Form.Control type="text" placeholder="Введите полность Фамилию, Имя и Отчество"/>
                        </Form.Group>
                      </Col>
                      <Col sm>
                        <Form.Group controlId="">
                            <Form.Label>Дата рождения</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                      </Col>
                      <Col sm>
                        <Form.Group controlId="">
                            <Form.Label>Паспорт</Form.Label>
                            <Form.Control type="text" placeholder="ХХХХ ХХХХХХ"/>
                        </Form.Group>
                      </Col>
                      <Col sm>
                        <Form.Group controlId="">
                            <Form.Label>Адрес регистрации</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                      </Col>
                      <Col sm>
                        <Form.Group controlId="">
                            <Form.Label>Доля капитала, %</Form.Label>
                            <Form.Control type="text" placeholder=""/>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Label> </Form.Label><br/>
                        <Button variant="light">+</Button>
                      </Col>
                    </Row>
                  </div>
                  :
                  <div>
                    <Row>
                    <Col sm>
                      <Form.Group controlId="">
                          <Form.Label>Наименование компании</Form.Label>
                          <Suggest placeholder="ИНН или наименование компании" callback={this.setData} method="party"/>
                      </Form.Group>
                    </Col>
                      <Col sm>
                        <Form.Group controlId="">
                            <Form.Label>Юридический адрес</Form.Label>
                            <Form.Control type="text" value={this.state.flag ? this.state.company.data.address.unrestricted_value : ''}/>
                        </Form.Group>
                      </Col>
                      <Col sm>
                        <Form.Group controlId="">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm>
                        <Form.Group controlId="">
                            <Form.Label>ИНН компании</Form.Label>
                            <Form.Control type="text" value={this.state.flag ? this.state.company.data.inn : ''} disabled/>
                        </Form.Group>
                      </Col>
                      <Col sm>
                        <Form.Group controlId="">
                            <Form.Label>КПП компании</Form.Label>
                            <Form.Control type="text" value={this.state.flag ? this.state.company.data.kpp : ''} disabled/>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm>
                        <Form.Group controlId="">
                            <Form.Label>ФИО руководителя</Form.Label>
                            <Suggest placeholder="Введите полность Фамилию, Имя и Отчество" method="fio"/>
                        </Form.Group>
                      </Col>
                      <Col sm>
                        <Form.Group controlId="">
                            <Form.Label>Должность руководителя</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Label> </Form.Label><br/>
                        <Button variant="light">+</Button>
                      </Col>
                    </Row>
                  </div>
                  }
                </Form>
              </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step5;