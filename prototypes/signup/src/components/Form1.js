import React from 'react';

import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import {
    Spinner,
    Container,
    Row,
    Col,
    DropdownButton,
    Dropdown,
} from 'react-bootstrap';

import Suggest from '../components/Suggest';

class Form1 extends React.Component {
    constructor(props) {
      super(props);
      this.email = React.createRef();
      this.state = { email: '', okveds: ['Укажите сферу деятельности'] };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({email: event.target.value});  }
    handleSubmit(event) {
        event.preventDefault();
    }

    getOKVED = (value) => {
        let okveds = [];
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token "+process.env.REACT_APP_DADATA);
        myHeaders.append("Content-Type", "application/json");
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify({"query":value.inn,"branch_type":"MAIN"}),
          redirect: 'follow'
        };
        fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party", requestOptions)
        .then(response => response.json())
        .then(result => {
          result.suggestions[0].data.okveds.map(element => {
            okveds.push(element.name);
          });
          this.setState({ okveds: okveds });
        })
        .catch(error => console.log('error', error));
    };
  
    render() {
      return (
        <Container className="p-3" visible={this.props.visible}>
            <Row style={{height:200}}>
                <Col>
                    <img src="https://factoringplus.ru/images/logo.svg"></img>
                </Col>
                <Col style={{right:0}} ref={this.email}>
                    <label>Зарегистрироваться</label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 style={{textAlign:"center", marginBottom:50}}>Проверьте возможность предоставления лимита по вашему дебитору</h1>
                    <Form style={{border: "2px rgba(0,0,0,0.1) solid", padding:40}}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <h4>Ваша компания</h4>
                                    <Suggest placeholder="Наименование компании или ИНН" method="party"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <h4>Дебитор</h4>
                                    <Suggest placeholder="Наименование компании или ИНН" method="party" callback={this.getOKVED}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Правильно указана сфера деятельности?</h4>
                                <DropdownButton id="dropdown-basic-button" title={this.state.okveds[0]} variant="secondary" width="100%">
                                {this.state.okveds.map( (variant) => (
                                    <Dropdown.Item>{variant}</Dropdown.Item>
                                ))}
                                </DropdownButton>
                            </Col>
                        </Row>
                        <Row style={{height:50, textAlign:"center", marginTop:50}} display="none">
                            <Col>
                                <Spinner animation="border" />
                            </Col>
                        </Row>
                        <Row style={{height:100}}><Col></Col></Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Введите ваш email</Form.Label>
                                    <Suggest placeholder="info@example.com" callback={this.getEmail} method="email"/>
                                    <Form.Text className="text-muted" style={{color:"#ff0000"}}>{this.state.errors}</Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Задайте пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="retypeBasicPassword">
                                    <Form.Label>Повторите пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <input type="checkbox" id="claims" checked/>
                                    <label>&nbsp;&nbsp;&nbsp;Я принимаю <a href="#">условия передачи информации</a></label>
                                </Form.Group>
                                <Link to={"/step1/" + this.state.email}>
                                    <Button variant="primary">
                                        Отправить
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Form1;