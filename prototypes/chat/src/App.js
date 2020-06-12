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
    console.log('New message');
  };

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
