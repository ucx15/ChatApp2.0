// import React from 'react'

import styles from './Styles/chatHeader.module.css';

const ChatHeader = () => {
  return (
    <div className={styles.chatHeader}>
      <img src="/assets/Images/butterfly_128px.png" className={styles.profImage} alt="profile-picture" />
      <div className={styles.headerTitle} id="chat-area-title"> GC1</div>
    </div >

  )
}

export default ChatHeader
