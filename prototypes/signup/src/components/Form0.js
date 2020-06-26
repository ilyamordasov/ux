import React, {useState} from 'react';

import {Link, withRouter} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Form} from 'react-bootstrap';
import {
    Spinner,
    Container,
    Row,
    Col,
    DropdownButton,
    Dropdown,
    Modal,
} from 'react-bootstrap';

import Suggest from '../components/Suggest';
import PrimaryBtn from './custom/PrimaryBtn';

const elements = ['ООО АШАН', 'ООО РАДУГА', 'ООО ПИКСЕЛЬ'];

class Form1 extends React.Component {
    constructor(props) {
      super(props);
      this.email = React.createRef();
      this.state = { email: '', okveds: ['Укажите сферу деятельности'], showOKVED: false, isLoading: true, debitor: {}, modal:false };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({email: event.target.value});  console.log(event.target.value);}
    handleSubmit(event) {
        event.preventDefault();
    }

    getEmail = (value) => {
        this.setState({email: value.name});
        this.props.email(value.name);
    };

    getINN = (value) => {
        this.props.client(value);
    };

    getOKVED = (value) => {
        let okveds = [];
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token "+process.env.REACT_APP_DADATA);
        myHeaders.append("Content-Type", "application/json");
        this.setState({debitor: value});
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify({"query":value.inn,"branch_type":"MAIN"}),
          redirect: 'follow'
        };
        fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party", requestOptions)
        .then(response => response.json())
        .then(result => {
          result.suggestions[0].data.okveds.map(element => {
            okveds.push(element.name);
          });
          this.setState({ okveds: okveds, showOKVED: true });
          setTimeout(() => this.setState({ isLoading: false }), 1000);
        })
        .catch(error => console.log('error', error));
    };

    rand = (min, max) => {
        return Math.ceil(Math.random() * (max - min) + min);
    };

    handleClose = () => this.setState({modal: false});
    handleShow = () => this.setState({modal: true});
  
    render() {
      return (
        <Container className="p-3" visible={this.props.visible}>
            <Row style={{height:200}}>
                <Col sm>
                    <div class="row head">
                        <div class="col-xl-4 col-lg-2 head768 col-md-2"><img src="https://factoringplus.ru/images/logo.svg" class="logoPlus"/></div>
                        <div class="col-xl-4 col-lg-6 head768 col-md-6">
                            <div class="row menu">
                            <div class="col-lg-4 col-md-4"><a href="#prod">О продукте</a></div>
                            <div class="col-lg-4 col-md-4"><a href="#company">О компании</a></div>
                            <div class="col-lg-4 col-md-4"><a href="#zayavka">Оставить заявку</a></div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 head768 col-md-3">
                            <div class="phone">8(800) 551 43 23</div>
                        </div>
                        <div class="col-xl-1 col-lg-1 head768 col-md-1"><img src="https://factoringplus.ru/images/lk-text.svg" class="headLk"/></div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <h3>Лимит на пополнение оборотных средств за 5 минут!</h3><br/>
                    <h6>Финансирование поставок, осуществленных на условиях отсрочки платежа</h6><br/>
                    <ul>
                        <li>Без залога</li>
                        <li>Без оценки финсостояния</li>
                        <li>По 2 документам</li>
                        <li>Процентная ставка от 0.5%</li>
                    </ul><br/><br/>
                    <Link to={"/step0"}>
                        <Button variant="primary" onClick={this.handleClose}>
                            Оформить сейчас
                        </Button>
                    </Link>
                </Col>
                <Col sm>
                    <img src="../money.jpg" alt=""/>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Form1;