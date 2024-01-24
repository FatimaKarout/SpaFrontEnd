import React, { useState } from 'react';
import '../styles/testimonial.css'
import test1 from '../Images/test1.jpg'

const TestimonialItem = ({ text, name }) => (
 <div>
   <p className='testimoniage'>{text}</p>
   <div className='testi-line-and-name'> 
        <hr className='testi-line'/>
        <p className='name-testi'>{name}</p>
   </div>
  
 </div>
);

const TestimonialComponent = () => {
 const [activePosition, setActivePosition] = useState(0);

 const elements = [
     { id: 1, content: <TestimonialItem text={`"This spa is incredible! The staff is friendly, the ambiance is soothing, and the treatments are fantastic. Highly recommend for a rejuvenating experience!"
       Interacting with native speakers during the course was a highlight, providing practical language usage".
       `} name='Katia' />, circle: <span className="dot"></span> },
     { id: 2, content: <TestimonialItem text={`This spa is a hidden gem! The staff is welcoming, the atmosphere is serene, and the treatments are top-notch. Treat yourself and indulge in a truly relaxing experience".
     Overall, I highly recommend this language course to anyone seeking to learn a new language`} name='Joe' />, circle: <span className="dot"></span> },
     { id: 3, content: <TestimonialItem text={`Discovering this hidden gem was a game-changer. Warm staff, a romantic setting, and tailored treatments made it an unforgettable experience. Ideal for those seeking relaxation and revitalization."





     `} name='Noah' />, circle: <span className="dot"></span> },
 ];

 return (
    <div className='main-in-testimlonial'>
            <div className='left-in-testimlonial'>
                <h1 className='header-in-testimonial'>People Say About Us</h1>
                <div className="container">
        {elements.map((element, position) => (
        <div key={element.id} className={position === activePosition ? 'element active' : 'element'}>
            {element.content}
        </div>
        ))}
        
        <div className="dots-container">
        <div className="dots">
            {elements.map((element, position) => (
            <span key={element.id} className={position === activePosition ? 'dot active' : 'dot'} onClick={() => setActivePosition(position)}></span>
            ))}
        </div>
        </div>
        </div></div>
            <div  className='right-in-testimlonial'><img src={test1} className='test1'/></div>
    </div>
 
 );
}

export default TestimonialComponent;