import React from 'react';
import {Link} from "react-router-dom";

import Stepper from 'react-stepper-horizontal';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Form,InputGroup} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import Countdown from './Countdown.js'

import '../App.css';
import '../Toggle.css';

class Step6 extends React.Component {
  
    constructor(props) {
      super(props);

      const currentDate = new Date(new Date().getTime()+10000);

      this.state = {
        company: {},
        email: this.props.email,
        date: currentDate.toISOString(),
        showCountdown: true
      };

      if (Object.keys(this.props.client).length === 0 && this.props.client.constructor === Object) {
        this.state.isEmpty = true;
      }
    }

    timerStop = () => {
      this.setState({showCountdown: false});
    }
  
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
                { this.state.showCountdown ? 
                  <div>
                    <h3 style={{textAlign:"center"}}>Ваши данные направлены на проверку, это займет не более 10 минут.<br/>По окончанию проверки вам придет письмо с данными для входа</h3><br/>
                    <div style={{textAlign:"center"}}>
                      <Countdown date={this.state.date} callback={this.timerStop}/>
                    </div>
                  </div>
                  :
                  <div style={{display: "flex", width:"100%", padding:40, backgroundColor:"#dff0d8", justifyContent: "center", alignItems: "center" }}>
                    <div>
                      <h3 style={{textAlign:"center"}}>Поздравляем с успешной регистрацией!<br/>
                      Ваши данные проверены и подтверждены, в течении 10 минут с вами свяжутся</h3>
                      <br/>
                    </div>
                  </div>
                }
              </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step6;