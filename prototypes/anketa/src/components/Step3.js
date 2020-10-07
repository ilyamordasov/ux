import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

import Suggest from '../components/Suggest';

class Step3 extends React.Component {

    constructor(props) {
        super(props);
        this.props.step(2);
        if (Object.keys(this.props.client).length > 0) {
            let data = this.props.client.data.data;
            this.state = {
                fio: this.props.client.data.data.type == "LEGAL" ? data.management.name : '',
                post: this.props.client.data.data.type == "LEGAL" ? data.management.post : '',
                isChecked: false,
                isContact: false
            };
        }
        else {
            this.state = {
                fio: '',
                post: '',
                isChecked: false,
                isContact: false
            }
        }
    }

    handleChange = () => {
        this.setState({isChecked: !this.state.isChecked});
    }
    handleContact = () => {
        this.setState({isContact: !this.state.isContact});
    }
  
    render() {
      return (
        <Container className="p-3">
            <label>ШАГ 3 из 6</label>
            <h3>Контактные лица для связи</h3>
            <br/><br/>
            { this.props.client.data.data.type == "LEGAL" ?
            <div>
                <h4>{this.state.post}</h4>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>ФИО</Form.Label>
                            <Form.Control type="text" defaultValue={this.state.fio}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Номер телефона</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Адрес электронной почты</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Check type="checkbox" label="Является главным бухгалтером" onChange={this.handleChange}/>
                    </Col>
                    <Col>
                        <Form.Check type="checkbox" label="Основной контакт" onChange={this.handleContact}/>
                    </Col>
                </Row>
            </div> : null }
            { !this.state.isChecked ? 
                <div>
                    <br/><br/>
                    <h4>Главный бухгалтер</h4>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>ФИО</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Номер телефона</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Адрес электронной почты</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Check type="checkbox" label="Основной контакт" onChange={this.handleContact}/>
                        </Col>
                    </Row>
                </div>
                : null
            }
            <br/><br/>
            <h4>Основной контакт</h4>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>ФИО</Form.Label>
                        <Form.Control type="text" defaultValue="Иванов Иван Иванович"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Номер телефона</Form.Label>
                        <Form.Control type="text" defaultValue="+7 903 000 00 00"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Адрес электронной почты</Form.Label>
                        <Form.Control type="text" defaultValue="ivanov@gmail.com"/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    { this.props.client.data.data.type == "LEGAL" ?
                    <div>
                        <Link to="/step4">
                        <Button variant="primary">Продолжить</Button>
                        </Link>
                    </div>
                    :
                    <div>
                        <Link to="/step5">
                        <Button variant="primary">Продолжить</Button>
                        </Link>
                    </div>
                    }
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step3;