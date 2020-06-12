import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import {Widget, renderCustomComponent, addResponseMessage} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import {DropdownButton,Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {lastMessage: 9999999999999999, channel:"", channels:[]}
    this.getAllChannels();
  }

  componentDidMount() {
    addResponseMessage("Hey there! Hope you're staying safe and healthy. Can I ask you a question?");
    this.intervalID = setInterval(this.fetchMessages, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  fetchMessages = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + process.env.REACT_APP_ZULIP_TOKEN);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(process.env.REACT_APP_ZULIP_URL + "/messages?anchor=" + this.state.lastMessage + "&num_before=0&num_after=10&narrow=[{\"operator\": \"stream\", \"operand\": \"test\"}]", requestOptions)
      .then(response => response.json())
      .then(result => {
        result.messages.map(item => {
          if (item.subject === "+79030000000" && item.id !== this.state.lastMessage) {
            addResponseMessage(item.content.replace(/<\/?[^>]+(>|$)/g, ""));
            this.setState({lastMessage: item.id});
          }
        });
      })
      .catch(e => console.log(e));
  }

  handleNewUserMessage = (message) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + process.env.REACT_APP_ZULIP_TOKEN);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("type", "stream");
    urlencoded.append("to", this.state.channel);
    urlencoded.append("content", message);
    urlencoded.append("subject", "+79030000000");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(process.env.REACT_APP_ZULIP_URL + "/messages", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({lastMessage: result.id});
      })
      .catch(error => console.log('error', error))
  }

  getAllChannels = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + process.env.REACT_APP_ZULIP_TOKEN);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(process.env.REACT_APP_ZULIP_URL + "/streams?include_owner_subscribed=true", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        var arr = [];
        result.streams.map(channel => {
          arr.push({name:channel.name, invite_only:channel.invite_only});
          if (!channel.invite_only) {
            this.setState({channel:channel.name});
          }
        });
        this.setState({channels:arr});
      })
      .catch(error => console.log('error', error));
  }

  chooseChannel = (e) => {
    this.setState({channel:e});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <DropdownButton title={this.state.channel} onSelect={this.chooseChannel}>
        {
          this.state.channels.map( item => (
            <Dropdown.Item eventKey={item.name}>{item.name} ({item.invite_only?"private":"public"})</Dropdown.Item>
          ))
        }
        </DropdownButton>
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
        <Widget handleNewUserMessage={this.handleNewUserMessage} title="Факторинг ПЛЮС" subtitle="Задайте свой вопрос!"/>
      </div>
    );
  };
}

export default App;
