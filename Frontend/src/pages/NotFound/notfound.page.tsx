// import React from 'react'

import styles from './notfound.module.css'

const NotFoundPage = () => {
	return (
		<div className={styles.notFound}>

			<div className={`${styles._404} ${styles.text}`}>404</div>
			<br />
			<div className={`${styles.pnf} ${styles.text}`}>Page Not Found</div>
		</div>
	)
}

export default NotFoundPage
