import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css"
import fb from "../Images/facebook1.png"
import insta from "../Images/instagram1.png"
import wt from "../Images/whatsapp.png"
import down from "../Images/down.png"
import phone from "../Images/phone.png"
import email from "../Images/email.gif"
import quote from "../Images/icons8-quote-48.png"



const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const accordionData = [
    {
      title: "Do you know? ",
      content: " A 60-minute massage can have similar rejuvenating effects on your body as a full night's sleep.",
    },
    {
      title: "Do you know? ",
      content: "Regular massage can help reduce muscle tension and improve flexibility"
    },
    {
      title: "Have you heard? ",
      content: "Massage therapy can enhance mental well-being and reduce anxiety."
    }
  ];
  
  return (
    <div className="footer-back">
      <div className="FooterContainer">
          <div className="footer_content">
            <p className="titleF">Heaven Spa</p>
            <p> <img src={phone} alt="" />71077070</p>
            <p> <img src={email} alt="" />Heavenspa@gmail.com</p>
          </div>
        <div className="InformationDiv">
          <p className=" titleF">Information</p>
          <div className="accordion">
            {accordionData.map((item, index) => (
              <div className="accordion-item " key={index}>
                <div
                  className="text-white flex items-center justifiy-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <img src={down} alt="Next" ></img>{" "}
                  <p>{item.title}</p>
                </div>
                {activeIndex === index && (
                  <div className="text-white  ">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid SocialDiv">
          <p className="titleF"> Social Media</p>
          <div className="flex items-center justify-center">
            <img src={fb} alt="icons"></img>{" "}
            <Link to="www.facebook.com">facebook</Link>
          </div>
          <div className="flex items-center justify-center">
            <img src={insta} alt="icons"></img>
            <Link to="www.instagram.com">Instagram</Link>
          </div>
          <div className="flex items-center justify-center">
            <img src={wt} alt="icons"></img>
            <Link to="www.whatsapp.com">Whatsapp</Link>
          </div>
      <p>    <img src={quote} alt="icon" />  “the most <br>
         </br>important time in<br>
         </br> the world, is the<br>
         </br>time you take for<br>
         </br> yourself”</p>

         <p className="Auteur"> Fearless Soul</p>

        </div>
      </div>
        <p className="text-white copy-footer">Copy right &copy; Heaven Spa </p>
    </div>
  );
};

export default Footer;