import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'



export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText]= useState('');
  function saveInputText(event){
    setInputText(event.target.value);
  }
  function sendMessage(){
    const newChatmessages= [
      ...chatMessages, 
      {
        message: inputText,
        sender:'user',
        id: crypto.randomUUID()
      }
    ];
    setChatMessages(newChatmessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatmessages, 
      {
        message: response,
        sender:'robot',
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
  }
  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chat bot" 
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input">
      </input>
      <button onClick={sendMessage} className="send-button">Send</button>
    </div>
  );
}
