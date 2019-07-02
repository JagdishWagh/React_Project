import React, { Component } from 'react';

class CalcButton extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <button onClick={this.evaluateOnBtnClick.bind(this, this.props.value.value)} className="btn btn-primary m-2">{this.props.value.value}</button>
            </div>
         );
    }

    evaluateOnBtnClick = (clickedValue) => {
        this.props.onButtonClick(clickedValue);            
    }
}
 
export default CalcButton;