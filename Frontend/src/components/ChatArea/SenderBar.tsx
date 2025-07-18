// import React from 'react'


import styles from './Styles/senderBar.module.css';

const SenderBar = () => {
	return (
		<div className={styles.senderBar}>

			{/* <!-- TODO: Change it to text field or something to accomodate larger text --> */}
			<input type="text" name="sender-field" className={styles.senderField} placeholder="Message" required />
			{/* <!-- <textarea name="sender-field" id="sender-field" placeholder="Message" required></textarea> --> */}
			<div className={styles.senderBtn}> <img src="/assets/icons/paper-plane.svg" className="icon-img" alt="send-icon.svg" /> </div>
		</div>
	)
}

export default SenderBar
