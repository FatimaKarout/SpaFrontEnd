import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/Ourservices.css';
import  basket from '../Images/spa-basket.jpg'
import stone from '../Images/stones-body.jpg'
import womenspa from '../Images/woman-spa-center.jpg'
import spa4 from '../Images/spa4.jpg'
import spa3 from '../Images/spa3.jpg'

const Ourservices = () => { 
  const [services ,setservices] =useState([])
  useEffect(() => {
    fetchApp()
  }, []);
    const fetchApp = async() =>{
        try {
        const res = await axios.get(`https://spabackenddd.onrender.com/service/getAllservices`)
        setservices(res.data.data)
        console.log(res.data)
      } catch (error) {
        console.error('error', error.message)
      }
        }
  return (
    <div>
      <h2 className='CategoryTitle content'>OUR SERVICES</h2>
      <h3 className='title-content'>Allow your body ,mind and soul sense a haven of tranquiy</h3>
      <div className="containerAs">
        {/* <div className="elementAs"> */}
           {services && services.length === 0 ? (
        <p>No Data available</p>
      ) : (
        services &&
        services.map((service) => (
          <div key={service._id}  className=''>
           <img src={service.image}  className="womenspa" alt="images" /> 
          < Link to={`/services/${service._id}`} className="view-services">
          {service.name}
          </Link>

          
          </div>
        ))
      )}
          
      </div>
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
    </div>
  );
};

export default Ourservices;