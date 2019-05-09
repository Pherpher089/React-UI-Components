import React from 'react';
import './Header.css';

const ImageThumbnail = ()=>{
    return(
        <div>
            <img src = {require ('./lambdacrest.png')} alt = 'This is alt'/>
        </div>
    );
};

export default ImageThumbnail;