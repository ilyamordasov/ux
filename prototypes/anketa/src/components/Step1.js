import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

import Suggest from '../components/Suggest';

class Step1 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        shortName: '',
        fullName: '',
        form: '',
        uAddr: '',
        fAddr: '',
        isChecked: false,
        regDate: '',
        INN: '',
        OGRN: '',
        OGRN_date: '',
        type: 'LEGAL',
        index: 0
      };
      this.props.step(0);
      this.setState({index:0});
    }

    formatDate = value => {
        var d = new Date(Number(value));
        var day = (d.getDay() < 10) ? "0" + d.getDay() : d.getDay();
        var month = (d.getMonth() < 10) ? "0" + d.getMonth() : d.getMonth();
        return day + "." + month + "." + d.getFullYear();
    }

    setData = value => {
        console.log(value);
        let data = value.data.data;
        this.props.client(value);
        this.setState({
            shortName: data.name.short_with_opf,
            fullName: data.name.full_with_opf,
            form: data.opf.full,
            uAddr: data.address.value,
            fAddr: '',
            regDate: this.formatDate(data.state.registration_date),
            INN: data.inn,
            OGRN: data.ogrn,
            OGRN_date: this.formatDate(data.ogrn_date),
            type: data.type,
            regAddr: ''
        });
    }

    handleChange = () => {
        this.setState({isChecked: !this.state.isChecked});
    }

    handleRegAddr = e => {
        this.setState({regAddr: e.target.value});
    }

    handleChange = () => {
        this.setState({isChecked: !this.state.isChecked});
    }
  
    render() {
      return (
        <Container className="p-3">
            <label>ШАГ 1 из 6</label>
            <h3>Общие сведения</h3>
            <br/><br/>
            { this.state.type == "LEGAL" ?
            <div>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Наименование компании</Form.Label>
                            <Suggest placeholder="" callback={this.setData} method="party" value={this.state.shortName} color="false"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Сокращенное наименование компании</Form.Label>
                            <Form.Control type="text" value={this.state.shortName}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Полное фирменное наименование компании</Form.Label>
                            <Form.Control type="text" value={this.state.fullName}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Организационно-правовая форма компании</Form.Label>
                            <Form.Control type="text" value={this.state.form}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Юридический адрес компании</Form.Label>
                            <Form.Control type="text" value={this.state.uAddr}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Фактический адрес компании</Form.Label>
                            <Form.Control type="text" defaultValue={this.state.isChecked ? this.state.uAddr : this.state.fAddr}/>
                            <Form.Check type="checkbox" label="Совпадает с юридическим адресом" onChange={this.handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Дата регистрации</Form.Label>
                            <Form.Control type="text" value={this.state.regDate}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>ИНН</Form.Label>
                            <Form.Control type="text" value={this.state.INN}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>ОГРН</Form.Label>
                            <Form.Control type="text" value={this.state.OGRN}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Телефон компании</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>WEB сайт</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Адрес электронной почты компании</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/step2">
                        <Button variant="primary">Продолжить</Button>
                        </Link>
                    </Col>
                </Row>
            </div>
            :
            <div>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>ФИО иднивидуального предпринимателя</Form.Label>
                            <Suggest placeholder="" callback={this.setData} method="party" value={this.state.shortName} color="false"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Фирменное наименование (при наличии)</Form.Label>
                            <Form.Control type="text" value={this.state.fullName}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Адрес регистрации ИП</Form.Label>
                            <Form.Control type="text" defaultValue={this.state.uAddr} onChange={this.handleRegAddr}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Адрес фактического ведения бизнеса</Form.Label>
                            <Form.Control type="text" value={this.state.uAddr}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Адрес проживания ИП</Form.Label>
                            <Form.Control type="text" defaultValue={this.state.isChecked ? this.state.uAddr : ''}/>
                            <Form.Check type="checkbox" label="Совпадает с адресом регистрации ИП" onChange={this.handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>ОГРНИП</Form.Label>
                            <Form.Control type="text" value={this.state.OGRN}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Дата регистрации</Form.Label>
                            <Form.Control type="text" value={this.state.OGRN_date}/>
                        </Form.Group>
                    </Col>
                </Row>
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
                            <Form.Label>Дата рождения</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Место рождения</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>WEB сайт</Form.Label>
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
            </div>
            }
        </Container>
      );
    }
  }

export default Step1;