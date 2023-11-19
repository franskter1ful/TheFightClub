import React, {useRef }from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('test', 'test', form.current, 'test')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>ARE YOU READY</span>
                <span>TO BEGIN THIS NEW JOURNEY?</span>
            
                <span className='stroke-text'></span>
                <span></span>
            </div>
        </div>
        <div className="right-j">

            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your Email address' />
                <button className='btn btn-j'>Registrate</button>
            </form>

        </div>
    </div>
  )
}

export default Join
