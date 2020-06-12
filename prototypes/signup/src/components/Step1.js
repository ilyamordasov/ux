import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,InputGroup} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

import Suggest from '../components/Suggest';

class Step1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: this.props.email
      };
    }
  
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
                  <div style={{display: "flex", width:"100%", padding:40, backgroundColor:"#dff0d8", justifyContent: "center", alignItems: "center" }}>
                    <div>
                      <h3 style={{textAlign:"center"}}>Поздравляем с успешной регистрацией!<br/>
                      Остался последний шаг - заполнить данные ок компании, это займет не больше 10 минут</h3>
                      <br/>
                      <h4 style={{textAlign:"center"}}><strong>Вам понадобятся следующие документы:</strong></h4><br/>
                        <h6><strong>Юридический комплект документов</strong></h6>
                        <ul>
                          <li>Копии паспортов учредителей и лиц, имеющих право подписи</li>
                          <li>Копия Устава в действующей редакции</li>
                          <li>Документы, подтверждающие полномочия единоличного исполнительного органа</li>
                        </ul>
                        <h6><strong>Финансовый комплект документов</strong></h6>
                        <ul>
                          <li>Патент на право применения патентной системы налогообложения</li>
                          <li>КУДиР 3 и 4 кв. 2018 г.</li>
                          <li>Платежное поручение об оплате патента</li>
                          <li>Справка об обязательствах</li>
                        </ul>
                    </div>
                  </div>
                  <br/>
                  <div style={{ display:"flex", justifyContent: "center", alignItems: "center" }} >
                    <Link to={"/step2"}>
                      <Button variant="primary">Продолжить?</Button>
                    </Link>
                  </div>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step1;