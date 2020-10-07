import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

import Suggest from '../components/Suggest';

class Step5 extends React.Component {

    constructor(props) {
        super(props);
        this.props.step(4);
        if (Object.keys(this.props.client).length > 0) {
            let data = this.props.client.data.data;
            this.state = {
                bank1: '',
                ks1: '',
                ks2: '',
                ks3: ''
            };
        }
        else {
            this.state = {
                bank1: '',
                ks1: '',
                ks2: '',
                ks3: ''
            }
        }
    }

    setData = value => {
        let data = value.data.data;
        this.setState({
            ks1: data.correspondent_account
        });
    }
    setData2 = value => {
        let data = value.data.data;
        this.setState({
            ks2: data.correspondent_account
        });
    }
    setData3 = value => {
        let data = value.data.data;
        this.setState({
            ks3: data.correspondent_account
        });
    }
  
    render() {
      return (
        <Container className="p-3">
            <label>ШАГ 5 из 6</label>
            <h3>Расчетный счет</h3>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Наименование Банка</Form.Label>
                        <Suggest placeholder="" callback={this.setData} method="bank" value={this.state.name} color="false"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Расчетный счет:</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Корреспондентский счет:</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.ks1}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Check type="checkbox" label="Получать ф-ние на этот счет"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Наименование Банка</Form.Label>
                        <Suggest placeholder="" callback={this.setData2} method="bank" value={this.state.name} color="false"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Расчетный счет:</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Корреспондентский счет:</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.ks2}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Check type="checkbox" label="Получать ф-ние на этот счет"/>
                </Col>
            </Row>
            <br/><br/>
            <h3>Расчетный счет для получения финансирования</h3>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Наименование Банка</Form.Label>
                        <Suggest placeholder="" callback={this.setData3} method="bank" value={this.state.name} color="false"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Расчетный счет:</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Корреспондентский счет:</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.ks3}/>
                    </Form.Group>
                </Col>
            </Row>
            <br/><br/>
            <h3>Сведения о задолженности по договорам факторинга</h3>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Наименование фактора</Form.Label>
                        <Suggest placeholder="" method="party" value={this.state.name} color="false"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Лимит ф-ния по договору:</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Покупатель:</Form.Label>
                        <Suggest placeholder="" method="party" value={this.state.name} color="false"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Ставка по договору:</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="success">Добавить еще...</Button>
                </Col>
            </Row>
            <br/><br/>
            <Row>
                <Col>
                    <Link to="/step6">
                      <Button variant="primary">Продолжить</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step5;