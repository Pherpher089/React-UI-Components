import React from 'react';
import './Footer.css'

const Footer = ()=>{
    return(
        <div className = "Footer">
            <img src = {require("./msg-icon.png")} />
            <img src = {require("./reshare-icon.png")} />
            <img src = {require("./like-icon.png")} />
            <img src = {require("./message-icon.png")} />
        </div>
    );
}

export default Footer;