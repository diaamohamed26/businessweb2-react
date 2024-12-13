import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.svg'
function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='touch'>
      <h2>Get in touch</h2>
      <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
      </div>
      <div className='contact-us'>
        <img src={contact} className='contact-img'/>
        <form className='form'>
          <label className='label'>Your Name:</label>
          <input name='name' id='name' type='text' className='input' placeholder='Name:'></input>
          <br/>
          <label className='label'>Your Email:</label>
          <input name='name' id='name' type='text' className='input' placeholder='Email:'></input>
          <br/>
          <label className='label'>Your Question:</label>
          <input name='name' id='name' type='text' className='input' placeholder='Subject:'></input>
          <br/>
          <label className='label'>Your Comment:</label>
          <textarea name='name' id='name' type='text' className='textarea' placeholder='Message:'></textarea>
          <br/>
          <button className='contact-btn'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
