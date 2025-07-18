// import React from 'react'


// Styles
import styles from './Styles/message.module.css';

import type { MessageProps } from '../../props';


const Message = (props: MessageProps) => {
	return (
		<div className={`${styles.message} ${props.isIncoming ? styles.incomingMsg : styles.outgoingMsg}`}>
			<div className={styles.msgSender}>{props.sender}</div>
			<div className={styles.msgContent}>{props.content}</div>
			<div className={styles.msgTime}>{props.time}</div>
		</div>
	)
}

export default Message