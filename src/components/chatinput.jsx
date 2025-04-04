import styles from "../styles/mainpage.module.css"
import { useState, useEffect } from "react";


function ChatInput() {
    const [textInput, setTextInput] = useState('');



    return(
        <div className={styles.chatSubmit}>
            <div className={styles.userSubmitBox}>
                <input type="text" className={styles.chatInput} />
            </div>
        </div>
    );
}

export default ChatInput;