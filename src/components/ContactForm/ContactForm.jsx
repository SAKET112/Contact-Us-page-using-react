/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import {BiSolidMessageSquareDetail} from 'react-icons/bi'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'


const ContactForm = (event) => {

  const submitHandler = () => {
    event.preventDefault();

    console.log("name: ", event.target[0].value);
    console.log("email: ", event.target[1].value);
    console.log("text: ", event.target[2].value);
  }



  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
          <Button 
              text = "VIA SUPPORT CHAT"
              icon = {<BiSolidMessageSquareDetail fontSize='24px'LuPhoneCall />}
            />
            <Button 
              text = "VIA CALL"
              icon = {<BsTelephoneFill fontSize='24px' color='white' />}
            />
          </div>
          <Button 
              isOutline={true}
              text = "VIA EMAIL FORMS"
              icon = {<MdEmail fontSize='24px' />}
            />

            <form onSubmit={submitHandler}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea  name='text' rows={7} />
              </div>

              <div>
                <Button styles={
                  {
                    display: "flex",
                    justifyContent: "end",
                  }
                }
                text = "SUBMIT"
                />
              </div>
            </form>
            
        </div>

        <div className={styles.contact_image}>
            <img src="../../../public/images/service.png" alt="contact-image" />
        </div>
    </section>
  )
}

export default ContactForm