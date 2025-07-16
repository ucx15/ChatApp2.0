// import React from 'react'
import styles from './chatArea.module.css';


const ChatArea = () => {
	return (
		<div className={styles.chatArea} id="chatarea">

			<div className={styles.chatBody}>

				<div className={styles.chatHeader}>
					<img src="./Res/Images/butterfly_128px.png" className={styles.profImage} alt="profile-picture" />
					<div className={styles.headerTitle} id="chat-area-title"> GC1</div>
				</div>

				<div className={styles.messages} id="messages-container"></div>

			</div>

			<div className={styles.senderBar}>

				{/*
		<input
          type=""
          name="sender-field"
          id="sender-field"
          placeholder="Message"
        />
		*/}

				{/* <!-- TODO: Change it to text field or something to accomodate larger text --> */}
				<input type="text" name="sender-field" id="sender-field" placeholder="Message" required />
				{/* <!-- <textarea name="sender-field" id="sender-field" placeholder="Message" required></textarea> --> */}
				<div id="sender-btn"> <img src="./Res/icons/paper-plane.svg" className="icon-img" alt="send-icon.svg" /> </div>

			</div>
		</div>

	)
}

export default ChatArea