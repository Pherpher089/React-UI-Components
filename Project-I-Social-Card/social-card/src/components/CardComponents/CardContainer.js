import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js'
import CardContent from './CardContent.js'

const CardContainer = ()=>{
    return(
        <div className = "Card-Container">
            <CardBanner/>
            <CardContent/>
        </div>
    );
   
}

export default CardContainer;