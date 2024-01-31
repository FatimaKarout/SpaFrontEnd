import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUserID } from "../Compontents/Util/GetData"
import '../styles/Herosection.css';
import Logo from '../Images/Spa-Logo2.png';
import header from '../Images/header.jpg'
const Herosection = () => {
  const [userID, setUserID] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken");
    if (authToken) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  // to switch between login and logout
  const handleLogin = () => {
    setUserID(getUserID());
    setLoggedIn(true);
    navigate("/login");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    setLoggedIn(false);
    navigate("/");
  };
  const handleClick = () => {
    navigate("/Contactus");
  };


  
  return (
    <>
      <header className="mainCont">
        <div className="logo">
          <img src={Logo} alt="Spa Logo" />
        </div>
        <nav>
          <div className="navLinks">
            <ul className="burger-menu">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
              </li>
              <button
            className="btn-items_list"
            onClick={loggedIn ? handleLogout : handleLogin}
          >
            {loggedIn ? "Logout" : "Login"}
          </button>
            </ul>
          </div>
        </nav>
      </header>  
      <div className='herosection'>
      <div className='description'>
        <p className="des1">A beautiful day at the <br></br>
        spa is what I call <br></br>
        heaven on earth</p>
        <p className="des2">you deserve a break!</p>
        <button className='navButton' onClick={handleClick}>  Book Now</button>
        
      </div>
      <div className='header'>
          <img src={header} alt="header image" />
        </div>
      </div>
    </>
  );
};

export default Herosection;
