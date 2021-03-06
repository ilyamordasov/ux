import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Widget, addResponseMessage, addUserMessage} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import {DropdownButton,Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import zulip from 'zulip-js';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      queue_id: -99999,
      last_event_id: 0,
      channel:"",
      channels:[],
    }

    this.intervalID = -1;

    this.config = {
      username: process.env.REACT_APP_ZULIP_UNAME,
      apiKey: process.env.REACT_APP_ZULIP_KEY,
      realm: process.env.REACT_APP_ZULIP_URL
    };
  }

  componentDidMount = () => {
    this.getAllChannels();
    addResponseMessage("Hey there! Hope you're staying safe and healthy. Can I ask you a question?");
    zulip(this.config).then(client => {
      if (this.state.queue_id === -99999) {
        client.queues.register().then(res => {
          console.log(res);
          this.setState({queue_id : res.queue_id});
          this.setState({last_event_id : res.last_event_id});
          //this.restoreOldMessages();
        });
      }

      this.intervalID = setInterval(() => {
        client.events.retrieve({queue_id:this.state.queue_id,last_event_id:this.state.last_event_id}).then(res => {
          if (res.hasOwnProperty("events")) {
            for (const event in res.events) {
              this.setState({last_event_id : Math.max(this.state.last_event_id, parseInt(res.id))});
              if (event.hasOwnProperty("message")) {
                addResponseMessage(event.message.content);
              }
            }
          }
        });
      }, 1000);
    });
  }

  handleNewUserMessage = (message) => {
    zulip(this.config).then(async (client) => {
      console.log("passed")
      var requestOptions = {
        to: this.state.channel,
        type: 'stream',
        subject: '+79030000000',
        content: message
      };
      return await client.messages.send(requestOptions);
    }).then(console.log);
    fetch('https://hooks.slack.com/services/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', {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      redirect: 'follow',
      body: JSON.stringify({'type': 'mrkdwn', 'text':message})
    }).then(console.log);
  }

  setTypingStatus = (to, flag) => {
    zulip(this.config).then(client => {
      client.typing.send();
    });
  };

  restoreOldMessages = () => {
    zulip(this.config).then(client => {
      client.messages.retrieve({type:'stream',anchor:'newest',num_before:10,num_after:0}).then(res => {
        for (const message of res.messages) {
          if (message.sender_full_name !== "Bot") addResponseMessage(message.content.replace(/<\/?[^>]+(>|$)/g, ""));
          else addUserMessage(message.content.replace(/<\/?[^>]+(>|$)/g,''), true);
          this.setState({last_event_id : message.id});
        }
        console.log(res);
      });
    });
  }

  getAllChannels = () => {
    zulip(this.config).then(client => {
      client.streams.retrieve().then(res => {
        var streams = [];
        for (const stream of res.streams) {
          streams.push({name:stream.name, invite_only:stream.invite_only});
        }
        if (streams.length === 0)
          this.setState({channel:'test'});
        else
          this.setState({channels:streams, channel:streams[0].name});
      });
    });
  }

  chooseChannel = (e) => {
    console.log(e);
    this.setState({channel:e});
  };

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <DropdownButton title={this.state.channel} onSelect={this.chooseChannel}>
        {
          this.state.channels.map( item => (
            <Dropdown.Item eventKey={item.name} key={item.name}>{item.name} ({item.invite_only?"private":"public"})</Dropdown.Item>
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
