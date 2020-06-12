import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Widget, renderCustomComponent, addResponseMessage} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class App extends React.Component {
  componentDidMount() {
    addResponseMessage("Добро пожаловать!");
  }

  handleNewUserMessage = (message) => {
    console.log(message);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + process.env.REACT_APP_ZULIP_TOKEN);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("type", "stream");
    urlencoded.append("to", "test");
    urlencoded.append("content", message);
    urlencoded.append("subject", "+79030000000");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(process.env.REACT_APP_ZULIP_URL, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Widget handleNewUserMessage={this.handleNewUserMessage}/>
      </div>
    );
  };
}

export default App;
