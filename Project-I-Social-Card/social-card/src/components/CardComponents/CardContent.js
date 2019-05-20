import React from 'react';
import './Card.css';

const CardContent = ()=>{
    return(
        <div className = 'Card-Content'>
            <p className = 'Title'>Get started with React</p>
            <p className = 'Content'>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <a href = "https://reactjs.org/">reactjs.org</a>
        </div>
    );
}

export default CardContent;
