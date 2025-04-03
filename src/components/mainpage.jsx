import React from 'react'
import { useState, useRef, useEffect  } from 'react';
import styles from "../styles/mainpage.module.css"

const MainPage = () => {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    return (
        <div className={styles.chatboxContainer}>
            <div className={styles.chatboxHeader}>

            </div>

            <div className={styles.chatboxTextbox}>

            </div>

            <div className={styles.chatSubmit}>
                <div className={styles.userSubmitBox}>

                </div>
            </div>
        </div>
    
  )
}

export default MainPage;