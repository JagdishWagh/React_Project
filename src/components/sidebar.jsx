import React, { Component } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import Content from './content';
import Calculator from "./calculator/calci";
class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="sidenav">
        <Link to="/">Home</Link>
        <Link to="/calci">Calculator</Link>
        {/* <Link to={`${this.match}/calci`}>Calculator</Link> */}
        <Link to="/evenodd">Even/Odd</Link>
        <Link to="/user/Jagdish">User</Link>
        <Link to="/form2">Form</Link>
        {/* <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a> */}
      </div>
    );
  }
}

export default SideBar;
