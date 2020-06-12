import React from 'react';

import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

import Suggest from '../components/Suggest';

class Form0 extends React.Component {
    constructor(props) {
      super(props);
      this.email = React.createRef();
      this.state = { email: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({email: event.target.value});  }
    handleSubmit(event) {
        event.preventDefault();
    }

    getEmail = (value) => {
        this.setState({email: value.name});
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
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Введите ваш email</Form.Label>
                            <Suggest placeholder="info@example.com" callback={this.getEmail} method="email"/>
                            <Form.Text className="text-muted" style={{color:"#ff0000"}}>{this.state.errors}</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Задайте пароль</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="retypeBasicPassword">
                            <Form.Label>Повторите пароль</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group>
                            <input type="checkbox" id="claims"/>
                            <label>Согласен со всеми claims</label>
                        </Form.Group>
                        <Link to={"/step1/" + this.state.email}>
                            <Button variant="primary">
                                Отправить
                            </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Form0;