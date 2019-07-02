import React from 'react';

 const FunctionalCompEx = (props) => {
    return(
        <div>
            Hi {props.name}... <span style={{color: props.compColour}}>this is functional component</span> 
        </div>
    )
}

export default FunctionalCompEx;