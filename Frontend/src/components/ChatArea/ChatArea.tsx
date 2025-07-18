// import React from 'react'

import ChatHeader from './ChatHeader';
import SenderBar from './SenderBar';
import Messages from './Messages';

// Styles
import styles from './chatArea.module.css';


const ChatArea = () => {
	return (
		<div className={styles.chatArea} id="chatarea">

			<div className={styles.chatBody}>

				<ChatHeader />

				{/*TODO: Load messages from backend */}
				<Messages data={[]} />

			</div>

			<SenderBar/>

		</div>

	)
}

export default ChatArea