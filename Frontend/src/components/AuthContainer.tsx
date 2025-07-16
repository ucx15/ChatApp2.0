// import React from 'react'

import styles from './AuthContainer.module.css'


const AuthContainer = () => {
	return (
		<div className={styles.authContainer}>
			<h1> Signup </h1>

			<form className={styles.authForm} id="auth-form">
				<input id="input-username" type="text" name="username" placeholder="Username" required />
				<input id="input-password" type="password" name="password" placeholder="Password" required />
				<input id="input-cnf-password" type="password" name="cnf-password" placeholder="Confirm password" required />

				<button id="btn-submit" type="submit">Signup</button>
			</form>

			{/* TODO: change its logic to use states and shit */}
			{/* <p className="info-footer">Have an account? <a href="login.html">Login</a></p> */}

		</div>
	)
}

export default AuthContainer