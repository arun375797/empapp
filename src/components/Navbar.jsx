import React, { useEffect, useState } from 'react'
import '../nav.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Navbar = () => {
   
  return (
     <div>
       <div>
  
  {/* End Top Bar */}
  <header id="header" className="header d-flex ">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="/empapp" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1 className='emp-app'>
          Employee App<span>.</span>
        </h1>
      </a>
      <nav id="navbar" className="navbar">
        <ul>
        
          <li>
          <Link to="/empapp">Home</Link>
          </li>
          <li>
          <Link to="/form">Form</Link>
            </li>
        </ul>
      </nav>
     
    </div>
  </header>
  {/* End Header */}
  {/* End Header */}
  {/* ======= table section ======= */}
 
  {/* End Hero Section */}
  {/* End Footer */}
  
  

  

  
   
   </div>
   </div>
  )
}

export default Navbar