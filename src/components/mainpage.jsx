import React, { useState, useRef, useEffect } from 'react';
import styles from "../styles/mainpage.module.css";
import ChatInput from './chatinput';

const MainPage = () => {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    const handleSendMessage = (message) => {
        setMessages(prevMessages => [...prevMessages, { text: message, sender: "user" }]);
    };

    useEffect(() => {
        // Scrolly
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className={styles.chatboxContainer}>
            <div className={styles.chatboxHeader}>
                <h1>Google</h1>
            </div>

            <div className={styles.chatboxTextbox}>
                {messages.map((msg, index) => (
                    <div key={index} className={styles.message}>
                        <span>{msg.text}</span>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <ChatInput onSend={handleSendMessage} />
        </div>
    );
};

export default MainPage;
