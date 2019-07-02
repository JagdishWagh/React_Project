import React, { Component } from "react";
import Header from "./../header";
import Content from "./../content";
import Footer from "./../footer";
import SideBar from "./../sidebar";
import Calculator from "./../calculator/calci";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import InputFormExample from "./../react-form-example";
import User from "./../user";

class AdminLayout extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-10 mt-4">
            <Content />

            {/* <div className="container-fluid">
                <Switch>
                  <Route exact path="/" render={() => <h1>Home Page</h1>} />
                  <Route exact path="/calci" component={Calculator} />
                  <Route exact path="/evenodd" component={InputFormExample} />
                  <Route exact path="/user/:username" component={User} />
                </Switch>
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AdminLayout;
