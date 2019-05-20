import React from 'react';
import './Button.css';

const ActionButton = props =>{
    return(
        <button className='Action-Button'>{props.name}</button>
    );
}

export default ActionButton;