// TODO: Combine SbChannels and SbChats into one unified component


// import React from 'react'

// import styles from './Styles/sbChats.module.css'
import defaultStyles from './sidebar.module.css';


// TODO: Add dynamic chat loading using props

const SbChats = () => {
  return (
    <div className={defaultStyles.sbSection}>
      <div className={defaultStyles.sbLabel}>CHATS</div>
      <div className={defaultStyles.sbLine}> </div>

      {/* <!-- All dynamically generated chats go inside here --> */}

      {/* TODO: Move contacts to a differnt component */}
      <div className={defaultStyles.contacts} id="chats-container">

						<div className={defaultStyles.contact}>
              <img src="/assets/icons/comment.svg" className="icon-img" alt=""/>
							<p> Person 1</p>
						</div>


      </div>
    </div>
  )
}

export default SbChats
