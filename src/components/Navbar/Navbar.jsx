/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="../../../public/images/LUCKY.png" alt="main-logo" />
      </div>
      <ul>
        <li href='#'>HOME</li>
        <li href='#'>ABOUT</li>
        <li href='#'>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navbar