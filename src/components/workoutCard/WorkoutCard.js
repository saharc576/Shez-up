import React from 'react'
import './WorkoutCard.css'


const WorkoutCard = ({imgURL}) => {

    const watchWorkoutHandler = (e) => {
        
    }

    return (
        <div className="card" >
            <img src={imgURL} className="hover-zoom" />
            <div className="Container">
                <p> <button onClick={watchWorkoutHandler}> צפה בסרטון דוגמה </button> </p>
            </div>
        </div>
    );
}
export default WorkoutCard;

// <div className="Card">
//     <div className="header">
//         <img src={imgURL}/>

//     </div>
//     <div className="body">
//         <h2> {title}</h2>
//         <p>{content}</p>
//     </div>
// </div>
