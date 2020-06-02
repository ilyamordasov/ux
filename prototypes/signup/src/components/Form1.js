import React, {useState} from 'react';

import {Link, withRouter} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import {
    Spinner,
    Container,
    Row,
    Col,
    DropdownButton,
    Dropdown,
    Modal,
} from 'react-bootstrap';

import Suggest from '../components/Suggest';
import PrimaryBtn from './custom/PrimaryBtn';

const elements = ['ООО АШАН', 'ООО РАДУГА', 'ООО ПИКСЕЛЬ'];

class Form1 extends React.Component {
    constructor(props) {
      super(props);
      this.email = React.createRef();
      this.state = { email: '', okveds: ['Укажите сферу деятельности'], showOKVED: false, isLoading: true, debitor: {}, modal:false };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({email: event.target.value});  console.log(event.target.value);}
    handleSubmit(event) {
        event.preventDefault();
    }

    getEmail = (value) => {
        this.setState({email: value.name});
    };

    getOKVED = (value) => {
        let okveds = [];
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token "+process.env.REACT_APP_DADATA);
        myHeaders.append("Content-Type", "application/json");
        this.setState({debitor: value});
    
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
          this.setState({ okveds: okveds, showOKVED: true });
          setTimeout(() => this.setState({ isLoading: false }), 1000);
        })
        .catch(error => console.log('error', error));
    };

    rand = (min, max) => {
        return Math.ceil(Math.random() * (max - min) + min);
    };

    handleClose = () => this.setState({modal: false});
    handleShow = () => this.setState({modal: true});
  
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
                                    <h4>Введите Дебитор</h4>
                                    <Suggest placeholder="Наименование компании или ИНН" method="party" callback={this.getOKVED}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        { this.state.showOKVED ? 
                        <div>
                        <Row>
                            <Col>
                                <h4>Правильно указана сфера деятельности?</h4>
                                <DropdownButton id="dropdown-basic-button" title={this.state.okveds[0]} variant="secondary" width="100%">
                                {this.state.okveds.map( (variant) => (
                                    <Dropdown.Item >{variant}</Dropdown.Item>
                                ))}
                                </DropdownButton>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {/* { this.state.isLoading ? <Spinner animation="border" /> : null } */}
                                <Form.Group style={{width: "100%", backgroundColor: (this.state.debitor.name != "ООО \"ЛЮБЕРГАЗ\"") ? "#dff0d8" : "#ffcfcf", marginTop:40, borderRadius:16}}>
                                    <div style={{ padding:40 }}>
                                        <h2>{this.state.debitor.name}</h2>
                                        <h6>ИНН: {this.state.debitor.inn}</h6>
                                        { (this.state.debitor.name != "ООО \"ЛЮБЕРГАЗ\"") ?
                                            <div>
                                                <Form.Label>Доступный лимит</Form.Label>
                                                <Form.Control type="text" value="15 000 000" />
                                                <br/>
                                                <h3>Мы рады сообщить, что дебитор {this.state.debitor.name} уже есть в нашей системе, создайте учетную запись, чтобы начать работать с этим дебитором.</h3><br/><br/>
                                                <h6>Также вас могут заинтересовать</h6>
                                            </div>
                                        :
                                            <div>
                                                <br/><br/><br/>
                                                <h3>К сожалению, мы не работаем с этим дебитором</h3><br/><br/>
                                                <h6>Но, возможно вам будут интересны следующие дебиторы? Или оставьте свою почту и мы оповестим вас, когда мы подключим {this.state.debitor.name}</h6><br/>
                                            </div>
                                        }
                                            <Container>
                                                <Row>
                                                { elements.map((value, index) => {
                                                    return <Col style={{backgroundColor: "#fff", width:200, height:100, borderRadius:8, padding:8}} md={{offset:1}}>
                                                        <h6>{value}</h6>
                                                        <h8>ИНН: {this.rand(999999, 9999999)}</h8><br/>
                                                        <h8>Доступный лимит: {this.rand(100000, 15000000)}</h8>
                                                    </Col>
                                                })}
                                                </Row>
                                            </Container>
                                        { (this.state.debitor.name != "ООО \"ЛЮБЕРГАЗ\"") ?
                                            <Container style={{backgroundColor:"#fff", marginTop:40, padding:20}}>
                                                <Row style={{marginBottom:40}}>
                                                    <Col>
                                                        <h2>Начать работу с данным дебитором</h2>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Group controlId="formBasicEmail">
                                                            <Form.Label>Ваша компания</Form.Label>
                                                            <Suggest placeholder="Наименование компании или ИНН" method="party"/>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
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
                                            </Container>
                                        :
                                            <Container style={{backgroundColor:"#fff", marginTop:40, padding:20}}>
                                                    <Row style={{marginBottom:40}}>
                                                        <Col>
                                                            <h2>Сообщить мне о подключении {this.state.debitor.name}</h2>
                                                            <Form.Group controlId="retypeBasicPassword">
                                                                <Suggest placeholder="info@example.com" callback={this.getEmail} method="email"/>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                            </Container>
                                    }
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        </div> : null }
                        { this.state.debitor.name == null || (this.state.debitor.name == "ООО \"ЛЮБЕРГАЗ\"") ?
                            <div>
                                <Row style={{height:50}}></Row>
                                <Row>
                                    <Col style={{textAlign:"center"}}>
                                        <h6>или</h6>
                                    </Col>
                                </Row>
                                <Row style={{height:50}}></Row>
                                <Row>
                                    <Col style={{textAlign:"center"}}>
                                        {/* <Link to={"/step1/" + this.state.email}> */}
                                            <Button variant="primary" onClick={this.handleShow}>
                                                Зарегистрируйся
                                            </Button>
                                        {/* </Link> */}
                                    </Col>
                                </Row>
                            </div> : null
                        }
                    </Form>
                </Col>
            </Row>
            <Modal show={this.state.modal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация нового пользователя</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Ваша компания</Form.Label>
                                    <Suggest placeholder="Наименование компании или ИНН" method="party"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Введите ваш email</Form.Label>
                                    <Suggest placeholder="info@example.com" callback={this.getEmail} method="email"/>
                                    <Form.Text className="text-muted" style={{color:"#ff0000"}}>{this.state.errors}</Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Задайте пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="retypeBasicPassword">
                                    <Form.Label>Повторите пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Form.Group>
                        <input type="checkbox" id="claims" checked/>
                        <label>&nbsp;&nbsp;&nbsp;Я принимаю <a href="#">условия передачи информации</a></label>
                    </Form.Group>
                    <Link to={"/step1/" + this.state.email}>
                        <Button variant="primary" onClick={this.handleClose}>
                            Отправить
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </Container>
      );
    }
  }

export default Form1;