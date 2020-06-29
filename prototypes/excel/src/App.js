import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {OutTable, ExcelRenderer} from 'react-excel-renderer';

import * as utils from './validation.js';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      rows: [],
      cols: []
    }
  }

  onChangeHandler = event => {
    event.preventDefault();

    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
        console.log(utils.checkINN(5010053018))
      }
    });        
  }

  render() {
    return (
      <div className="App">
        <Container className="p-3">
          <Row>
            <Col>
            <div className="form-group files color" styles={{height:500}}>
                <label>Upload Your File </label>
                <input type="file" className="form-control" name="file" onChange={this.onChangeHandler}/>
            </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
