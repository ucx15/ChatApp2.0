// import React from 'react'
import styles from './startupPanel.module.css';


const StartupPanel = () => {
	return (
		<>
			<div id="main-content-container" className={styles.mainContentContainer}>

				<div className={styles.mainContent}>
					<h1>Welcome to ChatApp</h1>
					<p>Select a channel or person to start chatting.</p>
					<div className={styles.uxBtns}>
						<div className={styles.btnNewX} id="btn-new-chat">
							<img src="/assets/icons/paper-plane2.svg" alt="" className={styles.iconImg} />
							Chat
						</div>
						<div className={styles.btnNewX} id="btn-new-channel">
							<img src="/assets/icons/paper-plane2.svg" alt="" className={styles.iconImg} />
							Channel
						</div>
					</div>
				</div>

			</div >

			{/* <!--TODO: implement one - to - one channels-- >
    < !-- < div id = "chat-maker-container" className="chat-maker-container" >

        <h2>Username</h2>

        <input type="text" name="chat-maker-username" id="chat-maker-username" placeholder="Username" required>

        <div id="chat-maker-btn" className="">
            <img src="./Res/icons/paper-plane.svg" className="icon-img" alt="send-icon.svg">
        </div>

        <div id="chat-maker-err" className="HIDE-ELEMENT">NOT Found</div>
    </div> --> */}


		</>
	)
}

export default StartupPanel
