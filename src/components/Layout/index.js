import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div>
    <p id="back-top" >
    <a href="#top"><span></span></a>
    </p>
    </div>
      </React.Fragment>
    
   )

 }

export default Layout