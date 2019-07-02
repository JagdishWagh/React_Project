import React, { Component } from "react";
// import InputFormExample from "./react-form-example";
// import FunctionalCompEx from "./functional-comp-example";
import Calculator from "./calculator/calci";
import {Route, Switch} from 'react-router-dom';
import InputFormExample from './react-form-example';
import User from './user';
import Form2 from "./form2";

class Content extends Component {
 
  render() {
    console.log(this.proprs);
    return (
      <div className="container-fluid">
        <Switch>
            <Route exact path="/" render={()=><h1>Home Page</h1>}/>
            <Route exact path="/calci" component={Calculator}/>
            <Route exact path="/evenodd" component={InputFormExample}/>
            <Route exact path="/user/:username" component={User}/>
            <Route exact path="/form2" component={Form2}/>
        </Switch>
      </div>
    );
  }
}

export default Content;
