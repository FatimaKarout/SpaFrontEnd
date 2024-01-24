import { useState } from "react";
import Login from '../Pages/login'



const Loginpage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return(
    <div>
    <Login/>
      </div>
    
  );
};

export default Loginpage;