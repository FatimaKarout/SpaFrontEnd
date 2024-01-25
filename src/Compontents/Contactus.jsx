import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useToasts } from 'react-toast-notifications';
import '../styles/Contactus.css';
import phonecall from '../Images/phonecall.gif';
import hour from '../Images/important.png';


const ContactUs = () => {
  const form = useRef();
  const { addToast } = useToasts();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    if (!userName || !userEmail || !message) {
      // Show notification for incomplete fields
      addToast('Please fill out all fields', {
        appearance: 'warning',
        autoDismiss: true,
      });
      return;
    }
    emailjs.sendForm('service_wi5amhe', 'template_vffuj95', form.current, 'I2guNpkUqhbrktmdM') // Use USER_ID instead of PUBLIC_KEY
     .then((result) => {
     console.log (result.text)
     console.log("message sent");
      // Show notification on success
      addToast('Message sent', {
        appearance: 'success',
        autoDismiss: true,
      });
    })
  
    .catch((error) => {
        console.log(error.text);
        // Show notification on error
        addToast('Failed to send message', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  };
   


  return (
    <div  className='contact-us'>
      <div className='contact-form'>
      <form   className=' form' ref={form} onSubmit={sendEmail}>
        <h1>Get in Touch</h1>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Send</button>
      </form>
      </div>
      

    
      <div className="map-section">
        <div className="gmap-frame">
          <iframe
            className="gmap-canvas"
            width="800"
            height="450"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Beiruth-verdun+(Heaven%20Spa)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Population mapping</a>
          </iframe>
        </div>

        <div className="additional-info">
        <p>
          <strong>
            <img src={phonecall} alt="Phone Icon" /> Phone:
          </strong>{' '}
          +123456789
          <br />
          <strong>
            <img src={hour} alt="hour" /> Opening Hours:
          </strong>{' '}
          Monday-Friday: 9AM - 7PM <br />
          {/* Add more information as needed */}
        </p>
      </div>

      </div>
    </div>
    
  );
};

export default ContactUs;
