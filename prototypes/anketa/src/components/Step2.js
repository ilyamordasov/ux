import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import {Container,Row,Col,Dropdown,DropdownButton} from 'react-bootstrap';

import Suggest from '../components/Suggest';

class Step2 extends React.Component {

    constructor(props) {
        super(props);
        this.props.step(1);
        if (Object.keys(this.props.client).length > 0) {
            let data = this.props.client.data.data;
            this.state = {
                fio: data.management.name,
                post: data.management.post,
                type: data.type, // LEGAL - ЮЛ, INDIVIDUAL - ИП
                dogovor_date: '',
                isBenif: false,
                isChecked: false,
                regAddr: '',
                code: ''
            };
        }
        else {
            this.state = {
                fio: '',
                post: '',
                type: '',
                dogovor_date: '',
                isBenif: false,
                isChecked: false,
                regAddr: '',
                code: ''
            }
        }
    }

    handleChange = () => {
        this.setState({isChecked: !this.state.isChecked});
    }

    handleRegAddr = e => {
        this.setState({regAddr: e.target.value});
    }

    handleSelect = value => {
        this.setState({isBenif: (value === "true") ? true : false});
    }

    handleFMS = value => {
        var data = value.data.data;
        this.setState({code: data.code});
    }
  
    render() {
      return (
        <Container className="p-3">
            <label>ШАГ 2 из 6</label>
            <h3>Сведения об органах управления юридического лица</h3>
            <br/><br/>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>ФИО органа управления</Form.Label>
                        <Form.Control type="text" value={this.state.fio}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Должность</Form.Label>
                        <Form.Control type="text" value={this.state.post}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Дата рождения</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Является беницифаром</Form.Label><br/>
                        <DropdownButton variant="Info" onSelect={this.handleSelect} title={this.state.isBenif ? "Является" : "Не является"}>
                            <Dropdown.Item eventKey="true">Является</Dropdown.Item>
                            <Dropdown.Item eventKey="false">Не является</Dropdown.Item>
                        </DropdownButton>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Срок действия согласно уставу</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
            </Row>
            {
                this.state.isBenif ?
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>ИНН:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>СНИЛС:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                </Row>
                : null
            }
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Серия и номер паспорта</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Дата выдачи паспорта</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Код подразделения, выдавшего паспорт</Form.Label>
                        <Row>
                            <Col>
                                <Form.Control type="text" defaultValue={this.state.code}/>
                            </Col>
                            <Col>
                                <Suggest placeholder="" callback={this.handleFMS} value="" method="fms_unit" color="false"/>
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Адрес по месту регистрации</Form.Label>
                        <Form.Control type="text" onChange={this.handleRegAddr}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Фактический адрес проживания</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.isChecked ? this.state.regAddr : ''}/>
                        <Form.Check type="checkbox" label="Совпадает с адресом по месту регистрации" onChange={this.handleChange}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Телефон</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Адрес электронной почты</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/step3">
                      <Button variant="primary">Продолжить</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step2;