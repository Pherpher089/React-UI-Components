import React from 'react';
import './Display.css';

const Display = props =>{
    return(
        <div className = 'Display'>
            <div className='Value-Text'>
                {props.value}
            </div>
        </div>    
    );
};

export default Display;