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
        email: window.location.pathname.split("/")[2]
      };
    }
  
    render() {
      return (
        <Container className="p-3">
            <Row style={{height:200}}>
                <Col>
                    <img src="https://factoringplus.ru/images/logo.svg"></img>
                </Col>
                <Col style={{right:0}}>
                  <label>{this.state.email}</label>
                </Col>
            </Row>
            <Row>
                <Col>
                  <div style={{display: "flex", width:"100%", height:200, padding:40, backgroundColor:"#f8f8f8", justifyContent: "center", alignItems: "center" }}>
                    <div style={{width:550, textAlign:"center"}}>Какая-то увлекательная картинка или инфографика, побудить закончить процесс регистрации + список необходимых документов</div>
                  </div>
                  <br/>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <Link to={"/step2/" + this.state.email}>
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