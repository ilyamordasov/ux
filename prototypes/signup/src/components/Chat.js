import React from 'react';
import {Widget, addResponseMessage, addUserMessage} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class Chat extends React.Component {
    constructor(props){
        super(props);
      }
    
      componentDidMount = () => {
        addResponseMessage("Hey there! Hope you're staying safe and healthy. Can I ask you a question?");
      }
    
      handleNewUserMessage = (message) => {
      }
    
      render() {
        return (
            <Widget handleNewUserMessage={this.handleNewUserMessage} title="Факторинг ПЛЮС" subtitle="Задайте свой вопрос!"/>
        );
      };
}

export default Chat;
