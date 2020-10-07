import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

class Step6 extends React.Component {

    constructor(props) {
        super(props);
        this.props.step(5);
        if (Object.keys(this.props.client).length > 0) {
            let data = this.props.client.data.data;
            this.state = {
                bank1: '',
                ks1: '',
                ks2: '',
                index: 0
            };
        }
        else {
            this.state = {
                bank1: '',
                ks1: '',
                ks2: '',
                index: 0
            }
        }
        this.setState({index:5});
    }
  
    render() {
      return (
        <Container className="p-3">
            <label>ШАГ 6 из 6</label>
            <h3>Загрузка скана договора</h3>
            <Row>
                <Col>
                    <Form>
                        <Form.File id="custom-file" label="Custom file input" custom/>
                    </Form>
                </Col>
            </Row>
            <br/><br/>
            <Row>
                <Col>
                    <Link to="/step6">
                      <Button variant="primary">Завершить</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
      );
    }
  }

export default Step6;