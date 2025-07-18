// import React from 'react'

import styles from './Styles/sbSearch.module.css'

const SbSearch = () => {
	return (
		<div id="search-container" className={styles.searchBar}>

			<input type="text" className={styles.inputField} name="input-field" id="input-ux-search"
				placeholder="Room ID to join room" required />

			<div id="btn-side-search" className={styles.searchButton}>
				🔍
			</div>

		</div>
	)
}

export default SbSearch
