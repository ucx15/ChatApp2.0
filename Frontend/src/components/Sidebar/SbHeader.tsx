import React from 'react'
import styles from './Styles/sbHeader.module.css';

interface Props {
  username: string;
}

const SbHeader = (props: Props) => {
  return (
	<div className={styles.sbHeader}>
		<div className={styles.usernameHeading}>{props.username}</div>
	</div>
  )
}

export default SbHeader
