import React, {useRef} from 'react' ;
import "./join.css" ;
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_18yovon', 'template_3jxdekt', form.current, 'qm2ji-38eGMnfnmTT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='join' id='join_us'>
        <div className="left_j">
            <br/>
            <hr/>
            <br/>
            <div>
                <span className='stroke_text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke_text'> WITH US?</span>
            </div>
        </div>
        <div className="right_j">
            <form ref = {form} className='email_container' onSubmit={sendEmail}>
                <input type="email" name='user_email' className="type"  placeholder='Enter email address'/>
                <button className='btn btn-j'>Join now</button>

            </form>
        </div>
      
    </div>
  )
}

export default Join
