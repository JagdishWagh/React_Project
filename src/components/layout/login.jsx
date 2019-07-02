import React, { Component } from 'react';
import AdminLayout from './admin-layout';
import ReactDOM from 'react-dom'; 
import {BrowserRouter} from 'react-router-dom';

class Login extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <h1>Login Page</h1>
            <button onClick={this.login}>Login</button>
        </div> );
    }

    login() {
        ReactDOM.render(<BrowserRouter><AdminLayout/></BrowserRouter>, document.getElementById('root'));
    }
}
 
export default Login;