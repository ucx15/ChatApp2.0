// import React from 'react'


import Message from './Message';

// Styles
import styles from './Styles/messages.module.css';


// types
import type { MessagesProps } from '../../props';

const Messages = (props: MessagesProps) => {
	return (
		<div className={styles.messages} id="messages-container">

			{/* Messages will be dynamically added here */}
			{
			props.data &&
			props.data.length > 0 &&
			props.data.map((msg, index) => (
				<Message
					key={index}
					sender={msg.sender}
					content={msg.content}
					time={msg.time}
					isIncoming={msg.isIncoming}
				/>
			))}


			{/* Example Messages */}
			<Message sender="Alice" content="Hello, Bob!" time="10:00 AM" isIncoming={true} />
			<Message sender="Bob" content="Hi, Alice! How are you?" time="10:01 AM" isIncoming={false} />
			<Message sender="Alice" content="I'm good, thanks! And you?" time="10:02 AM" isIncoming={true} />
			<Message sender="Bob" content="Doing well, just working on some projects." time="10:03 AM" isIncoming={false} />

		</div>

	)
}

export default Messages