import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,InputGroup} from 'react-bootstrap';
import {Container,Row,Col,Modal} from 'react-bootstrap';

class ChangePW extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: this.props.email,
        modal:true
      };
    }

    handleClose = () => this.setState({modal: false});
    handleShow = () => this.setState({modal: true});
  
    render() {
      return (
        <Container className="p-3">
            <Row style={{height:200}}>
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
            </Row>
            <Row>
                <Col>
                  <div style={{display: "flex", width:"100%", height:300, padding:40, backgroundColor:"#dff0d8", justifyContent: "center", alignItems: "center" }}>
                  </div>
                  <br/>
                  <div style={{ display:"flex", justifyContent: "center", alignItems: "center" }} >
                    <Link to={"/step2"}>
                      <Button variant="primary">Продолжить?</Button>
                    </Link>
                  </div>
                </Col>
            </Row>
            <Modal show={this.state.modal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Введите новый пароль</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col sm>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Задайте пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                                <Form.Group controlId="retypeBasicPassword">
                                    <Form.Label>Повторите пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={this.handleClose}>
                      Отправить
                  </Button>
                </Modal.Footer>
            </Modal>
        </Container>
      );
    }
  }

export default ChangePW;