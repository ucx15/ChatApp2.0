// import React from 'react'

// Styles
import styles from './Styles/sbFooter.module.css';
// import defaultStyles from './sidebar.module.css';


const SbFooter = () => {
	return (
		<div className={styles.sbFooter}>

			<div id="logout-btn" className={styles.logoutBtn}>
				Logout
				<img src="/assets/icons/exit.svg" className="icon-img" alt="logout.svg" />
			</div>

		</div>
	)
}

export default SbFooter