// import React from 'react'


// Components
import SbFooter from './SbFooter';
import SbChannels from './SbChannels';
import SbChats from './SbChats';
import SbHeader from './SbHeader';
import SbSearch from './SbSearch';

// Styles
import styles from './sidebar.module.css';


const Sidebar = () => {
	return (
		<div data-expanded="true" className={styles.sidebar} id="sidebar">

			<SbHeader username="uc" />

			<SbSearch />

			<div className={styles.sidebarBody}>

				<SbChats/>

				<SbChannels/>

			</div>

			<div className={styles.sbLine}></div>

			<SbFooter />

		</div>
	)
}

export default Sidebar
