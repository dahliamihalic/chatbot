import React, { useState, useRef, useEffect } from 'react';
import styles from "../styles/mainpage.module.css";
import ChatInput from './chatinput';
import data from '../data/data.json';


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

    const getBotResponse = (userMessage) => {
        const message = userMessage.toLowerCase();
        
        // Check each category for matching patterns
        for (const category in data) {
          if (category === 'default') continue;
          
          const patterns = data[category].patterns;
          if (patterns.some(pattern => message.includes(pattern))) { //ex: check if message says 'hello' to see if you should respond with 'hello' back
            const responsesList = data[category].responses;
            return responsesList[Math.floor(Math.random() * responsesList.length)];
          }
        }
    
        // If no match found, return a default response
        const defaultResponses = data.default.responses;
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      };




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

