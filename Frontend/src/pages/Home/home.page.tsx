// import React from 'react'

// Components
import Sidebar from '../../components/Sidebar/sidebar';
import MainPanel from '../../components/MainPanel/MainPanel';
import ChatArea from '../../components/ChatArea/ChatArea';

// Styles
import styles from './home.module.css';


const HomePage = () => {

  // TODO: Implement sidebar toggle functionality
  const toggleSidebar = () => { }


  return (
    <div className={styles.homePage}>

      {/* Sidebar Toggle Button */}
      <div className={styles.sbToggle} id="sb-toggle" onClick={toggleSidebar}>
        <img src='/assets/icons/cross.svg' className='icon-img' id="sb-toggle-img" />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <MainPanel />

      {/* Chat Area */}
      <ChatArea />

    </div>
  )
}

export default HomePage
