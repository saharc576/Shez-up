import React from 'react'
import WorkoutCard from '../components/workoutCard/WorkoutCard';
import '../components/workoutCard/WorkoutCard.css'
import {NavLink} from 'react-router-dom';
import '../css/Workouts.css'


const Workouts = () => {
    const workoutsUrls = ["https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/frontLever.jpeg?alt=media&token=129ee21d-79aa-4fcf-a8bb-695993b2ac37", "https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/muscleUp.jpeg?alt=media&token=87554036-e86a-4beb-9f78-2201da3b08a0", "https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/one%20hand%20pullUp.jpeg?alt=media&token=28bc8371-5425-4bdb-a179-91e62db4534f", "https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/pistol%20squat.jpeg?alt=media&token=c515546a-8ac3-477e-bdf8-27a379b2f51f"];


    return (
        <div className="row">
            <div className="column">
                <img src={workoutsUrls[0]} alt=""/>
                <img src={workoutsUrls[0]} alt=""/>
                <img src={workoutsUrls[0]} alt=""/>
                <img src={workoutsUrls[0]} alt=""/>
            </div>
            <div className="column">
                <img src={workoutsUrls[0]} alt=""/>
                <img src={workoutsUrls[0]} alt=""/>
                <img src={workoutsUrls[0]} alt=""/>
                <img src={workoutsUrls[0]} alt=""/>
            </div>
            <div className="column">
                <img src={workoutsUrls[0]} alt=""/>
                <img src={workoutsUrls[0]} alt=""/>
                <img src={workoutsUrls[0]} alt=""/>
                <img src={workoutsUrls[0]} alt=""/>
            </div>
        </div>

    );
};

export default Workouts;
