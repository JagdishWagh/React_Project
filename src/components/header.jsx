import React, { Component } from "react";
import "./header.css";
import Login from "./layout/login";
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory } from 'history';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>React</h1>
        <div>
          <ul>
            <li><a onClick={this.logout}>Logout</a></li>
          </ul>
        </div>
      </div>
    );
  }
  

  logout() {
    
    console.log(createBrowserHistory());
    ReactDOM.render(<BrowserRouter><Login/></BrowserRouter>, document.getElementById('root'));
  }

  
}

export default Header;
