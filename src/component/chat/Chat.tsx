import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';

const ChatComponent = () => {
  const [connection, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [chatId, setChatId] = useState('');
  const [chatName, setChatName] = useState('');
  const [otherUserId, setOtherUserId] = useState('');

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5079/chathub', {
        accessTokenFactory: () => localStorage.getItem('access_token')
      })
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start()
        .then(result => {
          console.log('Connected!');

          connection.on('ReceiveMessage', message => {
            setMessages(messages => [...messages, message]);
          });

          connection.on('ReceiveError', error => {
            console.error('Error: ', error);
          });

          connection.on('UserJoined', userId => {
            console.log('User joined: ', userId);
          });

          connection.on('ChatCreated', chat => {
            console.log('Chat created: ', chat);
            setChatId(chat.id);
          });

          connection.on('JoinedChat', chatId => {
            console.log('Joined chat: ', chatId);
          });
        })
        .catch(e => console.log('Connection failed: ', e));
    }
  }, [connection]);

  const sendMessage = async () => {
    if (connection.connectionStarted) {
      try {
        await connection.send('SendMessage', { content: message, chatId });
        setMessage('');
      } catch (e) {
        console.error('Sending message failed: ', e);
      }
    } else {
      alert('No connection to server yet.');
    }
  };

  const createChat = async () => {
    if (connection.connectionStarted) {
      try {
        await connection.send('CreateChat', { name: chatName, otherUserId });
        setChatName('');
        setOtherUserId('');
      } catch (e) {
        console.error('Creating chat failed: ', e);
      }
    } else {
      alert('No connection to server yet.');
    }
  };

  const joinChat = async () => {
    if (connection.connectionStarted) {
      try {
        await connection.send('JoinChat', chatId);
      } catch (e) {
        console.error('Joining chat failed: ', e);
      }
    } else {
      alert('No connection to server yet.');
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.content}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
      <hr />
      <input
        type="text"
        value={chatName}
        onChange={e => setChatName(e.target.value)}
        placeholder="Chat name"
      />
      <input
        type="text"
        value={otherUserId}
        onChange={e => setOtherUserId(e.target.value)}
        placeholder="Other user ID"
      />
      <button onClick={createChat}>Create Chat</button>
      <hr />
      <input
        type="text"
        value={chatId}
        onChange={e => setChatId(e.target.value)}
        placeholder="Chat ID"
      />
      <button onClick={joinChat}>Join Chat</button>
    </div>
  );
};

export default ChatComponent;