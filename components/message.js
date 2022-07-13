import React from "react";
import styles from "../styles/Message.module.css";

export default function Message({ message, isMe }) {
  return (
    <div
      className={
        isMe ? styles.sentMessageContainer : styles.receivedMessageContainer
      }
    >
      <div
        className={
          isMe ? styles.sentMessageHeader : styles.receivedMessageHeader
        }
      >
        <p className={styles.senderText}>{isMe ? "": (message.owner)}  </p>
        <p className={styles.senderTime}>{new Date(message.createdAt).getHours() + ':' + new Date(message.createdAt).getMinutes().toString().replace(/^(\d)$/, '0$1')}</p>
    
      </div>
      <div className={isMe ? styles.sentMessage : styles.receivedMessage}>
        <p>{message.message}</p>
      </div>
    </div>
  );
}