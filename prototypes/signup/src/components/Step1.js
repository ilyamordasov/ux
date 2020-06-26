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
                        <img src="https://factoringplus.ru/images/logo.svg" alt=""></img>
                    </Link>
                </Col>
                <Col style={{right:0}}>
                  <label>{this.state.email}</label>
                </Col>
            </Row>
            <Row>
                <Col>
                  <div style={{display: "flex", width:"100%", padding:40, backgroundColor:"#dff0d8", justifyContent: "center", alignItems: "center" }}>
                    <div>
                      <h3 style={{textAlign:"center"}}>Вуаля! Теперь у вас есть Личный кабинет в Факторинг Плюс ( ͡° ͜ʖ ͡°)</h3>
                      <br/>
                      <h4 style={{textAlign:"center"}}><strong>По выбранным вами покупателям есть доступные лимиты. Осталось только понять, сколько нужно и закрепить за вами.</strong></h4><br/>
                      <h6>Для этого необходимо заполнить инфо о компании, это азймет не более 5 минут. Вам понадобится только скан контракта</h6>
                    </div>
                  </div>
                  <br/>
                  <div style={{ display:"flex", justifyContent: "center", alignItems: "center" }} >
                    <Link to={"/step2"}>
                      <Button variant="primary">Продолжить?</Button>
                    </Link>
                    <Button variant="default">Продолжить позже</Button>
                  </div>
                </Col>
            </Row>
            <Row style={{height:100}}></Row>
            <Row>
              <Col>
                <h6>Если не готовы продолжить сами, отправьте ссылку другу. Он сможет продолжить заполнение за вас или вернитесь позже</h6>
                <br/><br/>
                  <Form.Group style={{width:300}}>
                    <InputGroup className="mb-2">
                      <InputGroup.Prepend>
                        <InputGroup.Text>⎘</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control type="text" value="http://fplus.ru/jsd64d" />
                    </InputGroup>
                  </Form.Group>
              </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step1;