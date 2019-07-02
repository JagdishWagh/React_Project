import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import AdminLayout from './components/layout/admin-layout';
import Login from './components/layout/login';
import Calculator from "./components/calculator/calci";
import InputFormExample from './components/react-form-example';
import User from './components/user';
function App() {
    return (   
        <div>
        {/* <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/admin" component={AdminLayout}/>
        </Switch> */}

        <AdminLayout/>
    </div>
  
    );
}

export default App;