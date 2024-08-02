import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const AppBar = () => {
  // return (
  //   <div className="bg-teal-500 w-screen flex justify-between items-center h-16 top-0 fixed">
  //     <div className='bg-transparent m-2 h-14'>
  //       <img src={logo} className='max-h-14'/>
  //     </div>
  //     <div className='font-mono text-white text-lg'>
  //       <Link to="/about" className='mr-4'>About Us</Link>
  //       <Link to="/membership" className='mr-4'>Membership</Link>
  //       <Link to="/event" className='mr-4'>Events</Link>
  //       <Link to='/contactus' className='mr-4'>Contact Us</Link>
  //     </div>
  //   </div>
  // )
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../logo-removebg.png" alt="Logo" />
        {/* <span className="navbar-l">Epsilon</span> */}
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">About Us</li>
        <li className="navbar-item">Membership</li>
        {/* <Link to="/membership">Membership</Link> */}

        <li className="navbar-item">Events</li>
        <li className="navbar-item">Login</li>
      </ul>
    </nav>
  );
};

export default AppBar;
