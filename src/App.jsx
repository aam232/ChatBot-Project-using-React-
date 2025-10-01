import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';
import './App.css'

function App(){
  const [chatMessages, setChatMessages]= useState([{
    message: 'hello chatbot',
    sender: 'user',
    id: 'id1'
  },{
    message: 'Hello how can I help you',
    sender: 'robot',
    id: 'id2'
  }, {
    message: 'can you get me todays date',
    sender: 'user',
    id: 'id2'
  } ,{
    message: 'today is September 27',
    sender: 'robot',
    id: 'id4'
  }]
  )
  //const [chatMessages, setChatMessages]=array;
  
  return (
  <div className="app-container">
    <ChatMessages chatMessages={chatMessages} />
    <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
  </div>);
}



export default App
