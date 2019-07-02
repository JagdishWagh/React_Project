import React from 'react';

const ErrorMsg = (props) => {
    return(
        <span style={{color:'red'}}>
        {props.text}
        </span>
    )
}

export default ErrorMsg;