// import React from 'react'


import styles from './sidebar.module.css';


const Sidebar = () => {
	return (
		<div data-expanded="true" className={styles.sidebar} id="sidebar">
			<div className={styles.sbHeader}>
				<div id="username-heading"></div>
			</div>


			<div id="search-container" className={styles.searchBar}>
				<input type="text" className={styles.inputField} name="input-field" id="input-ux-search"
					placeholder="Room ID to join room" required/>
					<div id="btn-side-search">
						🔍
					</div>
			</div>

			<div className={styles.sidebarBody}>

				<div className={styles.sbSection}>
					<div className={styles.sbLabel}>CHATS</div>
					<div className={styles.sbLine}> </div>

					{/* <!-- All dynamically generated chats go inside here --> */}
					<div className={styles.contacts} id="chats-container">
						{/*
						<!-- <div className="contact"> <img src="./Res/icons/comment.svg" className="icon-img" alt="">
							<p> Person 1</p>
						</div> --> */}

					</div>
				</div>

				<div className={styles.sbSection}>
					<div className={styles.sbLabel}>CHANNELS</div>
					<div className={styles.sbLine}></div>

					<div className={styles.contacts} id="channels-container">
						<div className={styles.contact}> <img src="./Res/icons/comment.svg" className={styles.iconImg} alt=""/>
							<p>Channel Global</p>
						</div>
						{/* <!--
                    <div className={styles.contact}> <img src="./Res/icons/comment.svg" className={styles.iconImg} alt="">
                        <p>GC 2</p>
                    </div>
                    <div className={styles.contact}> <img src="./Res/icons/comment.svg" className={styles.iconImg} alt="">
                        <p>GC 3</p>
                    </div>
                    --> */}
					</div>
				</div>


			</div>

			<div className={styles.sbLine}></div>
			<div className={styles.sbFooter}>

				<div id="logout-btn">Logout
					<img src="/assets/icons/exit.svg" className={styles.iconImg} alt="logout.svg"/>
				</div>
			</div>

		</div>
	)
}

export default Sidebar
