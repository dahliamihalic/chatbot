import styles from "../styles/mainpage.module.css";
import { useState, useEffect } from "react";

function ChatInput() {
    const [textInput, setTextInput] = useState("");

    const handleChange = (e) => {
        setTextInput(e.target.value);
    };

    const textSubmit = (e) => {
        e.preventDefault();
        if (textInput.trim() !== "") {
            console.log("Submitted message:", textInput);
            // TODO: Send the message to API or parent component
            setTextInput(""); // Clear input after submit
        }
    };

    useEffect(() => {
        //I'm assuming the API will be placed here
    }, []);

    return (
        <form onSubmit={textSubmit} className={styles.chatSubmit}>
            <div className={styles.userSubmitBox}>
                <input
                    type="text"
                    value={textInput}
                    onChange={handleChange}
                    placeholder="Text:"
                    className={styles.chatInput}
                />
                <button type="submit" className={styles.submitButton}>
                    Send
                </button>
            </div>
        </form>
    );
}

export default ChatInput;