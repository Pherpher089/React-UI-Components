import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';
import HeaderTitle from './HeaderTitle'

const HeaderContainer = ()=>{
    return(
        <div className = 'Header-Container'>
        <ImageThumbnail />
            <div>
            <HeaderTitle />
            <HeaderContent />
            </div>
        </div>
    );
    
};

export default HeaderContainer;
