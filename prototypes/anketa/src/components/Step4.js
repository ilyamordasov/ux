import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import {Container,Row,Col,Accordion,Card,Dropdown,DropdownButton} from 'react-bootstrap';

import Suggest from '../components/Suggest';

class Step4 extends React.Component {

    constructor(props) {
        super(props);
        this.props.step(3);
        if (Object.keys(this.props.client).length > 0) {
            let data = this.props.client.data.data;
            this.state = {
                isChecked: false,
                regAddr: ''
            };
        }
        else {
            this.state = {
                isChecked: false,
                regAddr: ''
            }
        }
    }

    handleRegAddr = e => {
        this.setState({regAddr: e.target.value});
    }
  
    render() {
      return (
        <Container className="p-3">
            <label>ШАГ 4 из 6</label>
            <h3>Учредители</h3>
            <Row>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" value="ЦЕНТРАЛЬНЫЙ БАНК РОССИЙСКОЙ ФЕДЕРАЦИИ"/>
                                        <Form.Label>ИНН: 7702235133</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <DropdownButton variant="Info" title="Юридическое лицо">
                                            <Dropdown.Item eventKey="true">Юридическое лицо</Dropdown.Item>
                                            <Dropdown.Item eventKey="false">Физическое лицо</Dropdown.Item>
                                        </DropdownButton>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <DropdownButton variant="Info" title="Является бенефициаром">
                                            <Dropdown.Item eventKey="true">Является бенефициаром</Dropdown.Item>
                                            <Dropdown.Item eventKey="false">Не является бенефициаром</Dropdown.Item>
                                        </DropdownButton>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Доля</Form.Label>
                                        <Form.Control type="text" value="67%"/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>КПП</Form.Label>
                                            <Form.Control type="text" value="7674754746"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Юридический адрес</Form.Label>
                                            <Form.Control type="text" value="г. Москва"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Телефон</Form.Label>
                                            <Form.Control type="text" value="+7 495 000 00 00"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>ФИО руководителя</Form.Label>
                                            <Form.Control type="text" value="Набиуллина Эльвира Сахипзадовна"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Должность руководителя</Form.Label>
                                            <Form.Control type="text" value="Председатель банка России"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" value="Греф Герман Оскарович"/>
                                        <Form.Label>ИНН: 770303580308</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <DropdownButton variant="Info" title="Физическое лицо">
                                            <Dropdown.Item eventKey="true">Юридическое лицо</Dropdown.Item>
                                            <Dropdown.Item eventKey="false">Физическое лицо</Dropdown.Item>
                                        </DropdownButton>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <DropdownButton variant="Info" title="Не является бенефициаром">
                                            <Dropdown.Item eventKey="true">Является бенефициаром</Dropdown.Item>
                                            <Dropdown.Item eventKey="false">Не является бенефициаром</Dropdown.Item>
                                        </DropdownButton>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Доля</Form.Label>
                                        <Form.Control type="text" value="33%"/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Гражданство</Form.Label>
                                            <DropdownButton variant="Info" title="РФ">
                                                <Dropdown.Item eventKey="true">РФ</Dropdown.Item>
                                                <Dropdown.Item eventKey="false">Другое...</Dropdown.Item>
                                            </DropdownButton>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Когда выдан:</Form.Label>
                                            <Form.Control type="text" value="21.08.2001"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Серия и номер паспорта:</Form.Label>
                                            <Form.Control type="text" value="4508 789004"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Дата рождения:</Form.Label>
                                            <Form.Control type="text" value="01.01.1970"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Кем выдан:</Form.Label>
                                            <Form.Control type="text" value="774-02 ПВО ОВД Тверского района г. Москвы"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Место рождения:</Form.Label>
                                            <Form.Control type="text" value="г. Москва"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Адрес по месту регистрации:</Form.Label>
                                            <Form.Control type="text" value="100100, г. Москва, ул. Тверская 4"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Фактический адрес проживания:</Form.Label>
                                            <Form.Control type="text" defaultValue={this.state.regAddr}/>
                                            <Form.Check type="checkbox" label="Совпадает с адресом по месту регистрации" onChange={this.handleRegAddr}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Row>
            <Row>
                <Col>
                    <Link to="/step5">
                      <Button variant="primary">Продолжить</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step4;