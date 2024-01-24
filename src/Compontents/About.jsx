import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/Ourservices.css';
import  basket from '../Images/spa-basket.jpg'


const About = () => { 
return (
<div className="containerAa">
  <div className="elementAa">
    <h2 className="wea">Heaven SpaCenter</h2>
    <p className="oua">
    your well-being is our top priority. We adhere to the highest standards of hygiene and<br></br>
     sanitation to ensure a safe and clean environment for all our clients.<br></br>
   From the moment you arrive until the moment you leave, <br>
   </br>we want you to feel cared for, pampered, and completely at ease.
    </p>
</div>
  <div className="aboutimg">
    <img src={basket} alt="spa" className="spa-basket" />
    </div>
</div>
);
}

export default About ;
