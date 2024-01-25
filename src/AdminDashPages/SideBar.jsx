// Dashboard.js
import React, { useState } from 'react';
// import Home from './Home';
// import About from './About';
import AdminDashboard from '../Compontents/AdminDashboard';
import '../AdminDashCSS/AdminDashboard.css';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const showPage = (pageName) => {
    setCurrentPage(pageName);
  };

  let currentPageComponent;

  switch (currentPage) {
    case 'Appoitment':
      currentPageComponent = <AdminDashboard/>;
      break;
    default:
      currentPageComponent = <AdminDashboard/>;
  }

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <a href="#" onClick={() => showPage('Appoitment')}>Appoitment</a>
      </div>

      <div className="contentee">
        {currentPageComponent}
      </div>
    </div>
  );
};

export default Dashboard;