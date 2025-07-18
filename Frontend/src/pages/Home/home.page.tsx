// import React from 'react'

// Components
import Sidebar from '../../components/Sidebar/sidebar';
// import StartupPanel from '../../components/MainPanel/StartupPanel';
// import ChatArea from '../../components/ChatArea/ChatArea';

// Styles
import styles from './home.module.css';


const HomePage = () => {

  // TODO: Implement sidebar toggle functionality
  // const toggleSidebar = () => { }


  return (
    <div className={styles.homePage}>

      {/* Sidebar Toggle Button */}

      {/*
      <div className={styles.sbToggle} id="sb-toggle" onClick={toggleSidebar}>
        <img src='/assets/icons/cross.svg' className='icon-img' id="sb-toggle-img" />
      </div>
      */}

      {/* Sidebar */}
      <Sidebar />

      {/* Startup Panel */}
      {/* <StartupPanel /> */}

      {/* Chat Area */}
      {/* <ChatArea /> */}

    </div>
  )
}

export default HomePage
