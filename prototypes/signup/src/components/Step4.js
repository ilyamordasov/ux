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
                <h3>Наши поздравления!</h3>
                <h4>По заявке предодобрены следующие лимиты!</h4>
              </Col>
            </Row>
            <Row style={{height:100}}></Row>
            <Row>
              <Col>
                {
                  this.props.debitors.map(item => {
                  return <h4>{item.name} - {(Math.floor(Math.random() * 15000000) + 1000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.</h4>
                  })
                }
              </Col>
            </Row>
            <Row style={{height:100}}></Row>
            <Row>
              <Col>
                <h6>
                  В течении 10 минут с вами свяжется один из наших консультантов, ответит на все интересующие вопросы и сориентирует по дальнейшим шагам.<br/>
                  Ну а пока ждете, подумайте, на что потратите факторинговое финансирование ;)
                </h6>
              </Col>
            </Row>
            <Row style={{height:100}}></Row>
            <Row>
                <Col>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <Button variant="primary">Отлично! Звоните</Button>
                  </div>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step4;