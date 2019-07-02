import React, { Component } from 'react';
import Validator from 'validator';
import ErrorMsg from './error-msg-component';

class Form2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fname:'',
            lname:'',
            emailid:'',
            password:'',
            course:'',
            errors:{}
         }
    }
    render() { 
        return ( 
            <div>
                <h2>Form Demo</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" 
                        name="fname" 
                        className="form-control" 
                        placeholder="first name" 
                        value={this.state.fname}
                        onChange={this.handleFnameChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        name="lname" 
                        className="form-control" 
                        placeholder="last name"
                        value={this.state.lname}
                        onChange={this.handleLnameChange}/>
                    </div>
                    <div className="form-group">
                        <input type="email" 
                        name="email" 
                        className="form-control" 
                        placeholder="email"
                        value={this.state.emailid}
                        onChange={this.handleEmailChange}/>
                        {this.state.errors.email && <ErrorMsg text={this.state.errors.email}/>}
                    </div>
                    <div className="form-group">
                        <input type="password" 
                        name="password" 
                        className="form-control" 
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="form-group">
                        <select type="text" name="course" className="form-control" 
                        onChange={this.handleCourseChange} value={this.state.course} selected>
                        <option disabled value="">--Select--</option>
                        <option>Angular</option>
                        <option>React</option>
                        <option>Vue</option>
                        </select>
                    </div>
                    <button className="btn btn-info" type="submit">Submit</button>
                </form>
            </div>
         );
    }

    handleFnameChange=(event)=> {
        this.setState({
            fname:event.target.value
        })
    }

    handleLnameChange=(event)=> {
        this.setState({
            lname:event.target.value
        })
    }
    
    handleEmailChange=(event)=> {
        this.setState({
            emailid:event.target.value
        })
    }

    handlePasswordChange=(event)=> {
        this.setState({
            password:event.target.value
        })
    }

    handleCourseChange=(event)=> {
        this.setState({
            course:event.target.value
        })
    }

    handleSubmit=(event)=> {
        const errors = this.validate(this.state.emailid, this.state.password);
        this.setState({errors: errors});
        if(errors.email || errors.passaword){
            console.log('error occured');
        }
        console.log(this.state);
        event.preventDefault();
    }

    validate = (email, password) => {
        const errors = {};
        if(!password){
            errors.passaword = 'This field is required';
        }
        if(!Validator.isEmail(email)){
            errors.email = "Enter valid email";
        }

        return errors;
    }
}
 
export default Form2;