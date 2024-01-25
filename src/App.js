import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/Compontents/loginpage';
import Herosection from './Compontents/Herosection';
import Ourservices from "./Compontents/Ourservices";
import Testimonial from "./Compontents/testimonial";
import Services from "./Compontents/Services";
import Appoitment from './Pages/appoitment';
import AdminDashboard from './Compontents/AdminDashboard'
import Contactus from './Compontents/Contactus';
import ProtectedRoute from './Compontents/ProtectRoute';
import { ToastProvider } from 'react-toast-notifications';
import SideBar from './AdminDashPages/SideBar';
import ContactUs from './Compontents/Contactus';
import About from './Compontents/About';
import Footer from './Compontents/Footer';




function App() {
  return (
    <div className='App'>
          <ToastProvider
           
          autoDismiss
    autoDismissTimeout={6000}
    placement="top-right" >


    <Router>
      <Routes>
        <Route exact path='/' element={<>  <Herosection />
          <Ourservices />
          <Testimonial />
          <Footer />
          </>} />

        <Route path="/login" element={<Login />} />
        <Route path="/services/:id" element={<Services />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/about" element={< About/>} />
        <Route path="/services" element={<Ourservices />} />



        <Route path="/admin" element={
            <ProtectedRoute adminOnly={true}>
              <SideBar/>
             </ProtectedRoute>
          } />        <Route path="/contact" element={<Contactus />} />




      </Routes>


    </Router>
    </ToastProvider>

    </div>
  );
}



export default App;
