// TODO: Combine SbChannels and SbChats into one unified component

// import React from 'react'

// import styles from './Styles/sbChannels.module.css'
import defaultStyles from './sidebar.module.css';


// TODO: Add dynamic chat loading using props

const SbChannels = () => {
  return (
    <div className={defaultStyles.sbSection}>
      <div className={defaultStyles.sbLabel}>CHANNELS</div>
      <div className={defaultStyles.sbLine}> </div>

      {/* <!-- All dynamically generated channels go inside here --> */}

      {/* TODO: Move Channels to a different component */}

      {/* NOTE: Sample channels */}
      <div className={defaultStyles.contacts} id="chats-container">

        <div className={defaultStyles.contact}> <img src="/assets/icons/comment.svg" className="icon-img" alt=""/>
          <p>GC 2</p>
        </div>

        <div className={defaultStyles.contact}> <img src="/assets/icons/comment.svg" className="icon-img" alt=""/>
          <p>GC 3</p>
        </div>
      </div>

    </div>
  )
}

export default SbChannels
