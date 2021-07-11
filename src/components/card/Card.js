import React from 'react'
import './Card.css'

const Card = ({onClick ,imgURL, title, content}) => {

    return (
        <div className="card">
            <img src={imgURL} className="img" />
            <div className="Container">
                <h4>
                    <b>{title}</b>
                </h4>
                <p className="price"> {content} </p>
                <p> <button onClick={onClick}> הזמן </button> </p>
            </div>
        </div>
    );
}
export default Card;

// <div className="Card">
//     <div className="header">
//         <img src={imgURL}/>

//     </div>
//     <div className="body">
//         <h2> {title}</h2>
//         <p>{content}</p>
//     </div>
// </div>
