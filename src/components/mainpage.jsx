import React from 'react'
import { useState } from 'react';
import styles from "../styles/mainpage.module.css"
import ChatInput from './chatinput'

const MainPage = () => {

    // const [messages, setMessages] = useState([]);
    // const [input, setInput] = useState('');
    // const messagesEndRef = useRef(null);

    return (
        <div className={styles.chatboxContainer}>
            <div className={styles.chatboxHeader}>

            </div>

            <div className={styles.chatboxTextbox}>

            </div>
            <ChatInput className={styles.chatSubmit}></ChatInput>
        </div>
    
  )
}

export default MainPage;