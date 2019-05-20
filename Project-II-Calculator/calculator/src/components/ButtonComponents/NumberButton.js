import React from 'react';
import './Button.css';

const NumberButton = props =>{
    return(
        <button className='Number-Button'> {props.number}</button>
    );
}

export default NumberButton;