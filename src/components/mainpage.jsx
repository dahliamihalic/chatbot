import React from 'react'
import { useState } from 'react';

const mainpage = () => {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    return (
        <div className={styles.chatboxContainer}>
            <div className={styles.chatboxHeader}>
                
            </div>

            <div className={styles.chatboxTextbox}>

            </div>
        </div>
    
  )
}

export default MainPage