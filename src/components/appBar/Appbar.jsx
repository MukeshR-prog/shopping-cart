import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import nestle from '../../assets/nestle.jpg';
import './../../styles/appbar.css';
import { MdDashboardCustomize } from "react-icons/md";     // Dashboard Icon
import { FaShoppingCart } from "react-icons/fa";            // Sales Icon
import { AiFillShopping } from "react-icons/ai";            // Orders Icon
import { FaUserCircle } from "react-icons/fa";              // Customer Icon
import { BiCategoryAlt } from "react-icons/bi";             // Items Icon
import { FaWarehouse } from "react-icons/fa";               // Inventory Icon
import { BsFillBellFill } from "react-icons/bs";            // Alerts Icon

const Appbar = () => {
  
  const [activeTab, setActiveTab] = useState('');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    
      <div className='side-content'>
        <div className='logo'>
            
          <img src={logo} alt="Logo" style={{ width: '50px', height: '50px',marginTop:'15px' }} />
        </div>
        <div></div>
        <div></div>
        <div 
          to='/' 
          className={`nav-links ${activeTab === 'Dashboard' ? "clicked" : ""}`} 
          onClick={() => handleClick('Dashboard')}
        >
          <MdDashboardCustomize /> Dashboard
        </div>
        
        <div 
          to='/sales' 
          className={`nav-links ${activeTab === 'Sales' ? "clicked" : ""}`} 
          onClick={() => handleClick('Sales')}
        >
          <FaShoppingCart /> Sales
        </div>

        <div 
          to='/orders' 
          className={`nav-links ${activeTab === 'Orders' ? "clicked" : ""}`} 
          onClick={() => handleClick('Orders')}
        >
          <AiFillShopping /> Orders
        </div>

        <div 
          to='/customer' 
          className={`nav-links ${activeTab === 'Customer' ? "clicked" : ""}`} 
          onClick={() => handleClick('Customer')}
        >
          <FaUserCircle /> Customer
        </div>

        <div 
          to='/items' 
          className={`nav-links ${activeTab === 'Items' ? "clicked" : ""}`} 
          onClick={() => handleClick('Items')}
        >
          <BiCategoryAlt /> Items
        </div>

        <div 
          to='/inventory' 
          className={`nav-links ${activeTab === 'Inventory' ? "clicked" : ""}`} 
          onClick={() => handleClick('Inventory')}
        >
          <FaWarehouse /> Inventory
        </div>

        <div 
          to='/alerts' 
          className={`nav-links ${activeTab === 'Alerts' ? "clicked" : ""}`} 
          onClick={() => handleClick('Alerts')}
        >
          <BsFillBellFill /> Alerts
        </div>
        <div>
            <img src={nestle} alt="Nestlé Logo" style={{ width: '80px', height: '60px',borderRadius:'7px' }} />  
  
        </div>

      </div>
   
  );
};

export default Appbar;
