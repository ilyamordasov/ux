import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Tag.css'
import {Button,Form,InputGroup} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';
import TagEditor from 'react-tageditor';
import Suggest from './Suggest';

class Step0 extends React.Component {
    constructor(props) {
      super(props);

      this.tagId = React.createRef();

      this.state = {
        email: this.props.email,
        debitors: []
      };
    }

    handleTagsChange = (tagsChanged, allTags, action) => {
      console.log(allTags);
    };

    removeTag = e => {

      var tmp = this.state.debitors;
      for(var i in tmp){
          if(tmp[i].name==e.target.value){
              console.log(">>>", e.target.value)
              tmp.splice(i,1);
              break;
          }
      }
      this.setState({debitors: tmp});
    }
    getEmail = (value) => {
      this.setState({email: value.name});
      this.props.email(value.name);
    };

    getINN = (value) => {
        this.props.client(value);
    };
    getDebitors = value => {
      var tmp = this.state.debitors;
      tmp.push(value);
      this.setState({debitors: tmp});
      this.props.debitors(this.state.debitors);
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
            <Row style={{height:150}}>
              <Col sm>
                <h2>Онлайн заявка на факторинг</h2><br/>
                <h6>Проверьте своих покупателей на возможность установления лимита</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form style={{border: "2px rgba(0,0,0,0.1) solid", padding:40}}>
                  <Row>
                      <Col sm>
                          <Form.Group controlId="formBasicEmail">
                              <h4>Мой покупатель</h4>
                              <Suggest placeholder="Введите наименование компаний или ИНН, разделенных запятой" method="party" callback={this.getDebitors} color="true" refs={this.tagId}/>
                              {
                                this.state.debitors.map(item => {
                                  return <div className={"tag"}>
                                  <input
                                      type="text"
                                      defaultValue={item.name} onClick={this.removeTag}/>
                                  <a className="">&times;</a>
                                  </div>
                                })
                              }
                          </Form.Group>
                      </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <Row style={{height:50}}></Row>
            <Row>
              <Col>
                {
                  (this.state.debitors.length !== 0)
                  ? <div style={{backgroundColor: "#dff0d8", padding:20, borderRadius:8}}>
                      <span>Отлично! Все зеленое, а это значит, что мы готовы двигаться дальше и установить лимит уже через несколько минут! Укажите свой email и задайте пароль. Мы создадим вам Личный кабинет и закрепим лимит по факторингу</span>
                      <Form.Group>
                      <Row>
                        <Col sm>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Ваша компания</Form.Label>
                                <Suggest placeholder="Наименование компании или ИНН" method="party" callback={this.getINN}/>
                            </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                          <Col sm>
                              <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Введите ваш email</Form.Label>
                                  <Suggest placeholder="info@example.com" callback={this.getEmail} method="email"/>
                                  <Form.Text className="text-muted" style={{color:"#ff0000"}}>{this.state.errors}</Form.Text>
                              </Form.Group>
                          </Col>
                          <Col sm>
                              <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Телефон</Form.Label>
                                  <Form.Control placeholder="info@example.com"/>
                                  <Form.Text className="text-muted" style={{color:"#ff0000"}}>На этот номер мы вышлем вам логин и пароль, а также решение по заявке</Form.Text>
                              </Form.Group>
                          </Col>
                      </Row>
                      <Row>
                          <Col sm>
                              <Form.Group controlId="formBasicPassword">
                                  <Form.Label>Задайте пароль</Form.Label>
                                  <Form.Control type="password" placeholder="Password" />
                              </Form.Group>
                          </Col>
                          <Col sm>
                              <Form.Group controlId="retypeBasicPassword">
                                  <Form.Label>Повторите пароль</Form.Label>
                                  <Form.Control type="password" placeholder="Password" />
                              </Form.Group>
                          </Col>
                      </Row>
                      <Row>
                          <Col sm>
                              <Form.Group>
                                  <input type="checkbox" id="claims" checked/>
                                  <label>&nbsp;&nbsp;&nbsp;Я принимаю <a href="#">условия передачи информации</a></label>
                              </Form.Group>
                          </Col>
                      </Row>
                    </Form.Group>
                    <div style={{ display:"flex", justifyContent: "center", alignItems: "center" }} >
                    <Link to={"/step1"}>
                      <Button variant="primary">Отправить</Button>
                    </Link>
                  </div>                  
                    </div>
                  : <Container>
                      <Row style={{backgroundColor: "#c0e9f6", padding:40, borderRadius:8}}>
                        <Col sm style={{textAlign: "center"}}>
                          <img src="https://cdn1.iconfinder.com/data/icons/business-and-finance-outline-41/64/business-and-finance-outline-41-03-512.png" width={64} style={{marginBottom: 16}}/>
                          <h6>Решение по финансированию за 15 минут, деньги за поставки в течении дня</h6>
                        </Col>
                        <Col sm style={{textAlign: "center"}}>
                          <img src="https://cdn3.iconfinder.com/data/icons/financial-business-1/48/48-Financial-512.png" width={64} style={{marginBottom: 16}}/>
                          <h6>Прозрачная тарификация, отчеты и удобный интерфейс</h6>
                        </Col>
                        <Col sm style={{textAlign: "center"}}>
                          <img src="https://w7.pngwing.com/pngs/543/188/png-transparent-financial-statement-balance-sheet-computer-icons-finance-financial-icon-miscellaneous-text-investment.png" width={64} style={{marginBottom: 16}}/>
                          <h6>Полностью электронный документооборот и дистанционная работа в Личном кабинете</h6>
                        </Col>
                      </Row>
                    </Container>
                }
              </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step0;