import React, { Component } from 'react';

class User extends Component {
    state = {  }
    render() { 
        return ( <h2>Hello {this.props.match.params.username}</h2> );
    }
}
 
export default User;