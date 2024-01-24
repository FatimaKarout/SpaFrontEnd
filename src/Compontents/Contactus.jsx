import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/Contactus.css';
import phonecall from '../Images/phonecall.gif'
import hour from '../Images/important.png'

const ContactUs = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
    // Assuming the form submission was successful, show the confirmation message
    setShowConfirmation(true);

    // You may want to reset the form fields or perform other actions here
  };

  const googleMapsLink = 'https://www.google.com/maps/place/ABC+Verdun/@33.8842794,35.4845502,15z';

  return (
    <div className="contact-us">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>

        {showConfirmation && <p>Your form is successfully filled up!</p>}
        <div className="additional-info">
        <p>
        <strong><img src={phonecall} alt="Phone Icon" /> Phone:</strong> +123456789<br />
          <strong><img src={hour} alt ="hour" /> Opening Hours:</strong> Monday-Friday: 9AM - 7PM <br />
          {/* Add more information as needed */}
        </p>
      </div>

      </div>
       <div className='map-section'>
        <div className='gmap-frame'>
      <iframe  className="gmap-canvas"  width="800" height="450" frameborder="0" scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Beiruth-verdun+(Heaven%20Spa)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
      </div>
      </div>
      </div>
  );
};

export default ContactUs;
