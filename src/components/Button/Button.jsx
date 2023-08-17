/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
  return (
    <button className={ props.isOutline ? styles.isOutline_btn : styles.primary_btn}> 
        {props.icon}
        {props.text}
    </button>
  )
}

export default Button