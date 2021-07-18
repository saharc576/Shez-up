import React from 'react'
import {useState} from 'react';
// import WorkoutCard from '../components/workoutCard/WorkoutCard';
// import '../components/workoutCard/WorkoutCard.css'
import WorkoutsStyle from '../css/Workouts.module.css'
import FilterButtons from '../css/FilterButtonWorkouts.module.css'


const Workouts = () => {
    const workoutsUrls = [
        {
            type: "front lever",
            url: "https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/frontLever.jpeg?alt=media&token=129ee21d-79aa-4fcf-a8bb-695993b2ac37"
        }, {
            type: "muscleUp",
            url: "https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/muscleUp.jpeg?alt=media&token=87554036-e86a-4beb-9f78-2201da3b08a0"
        }, {
            type: "one hand muscleup",
            url: "https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/one%20hand%20pullUp.jpeg?alt=media&token=28bc8371-5425-4bdb-a179-91e62db4534f"
        }, {
            type: "pistol",
            url: "https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/pistol%20squat.jpeg?alt=media&token=c515546a-8ac3-477e-bdf8-27a379b2f51f"
        }
    ];


    const [typeFilter, setTypeFilter] = useState(['hands', 'legs']);

    const handleTypeFilter = (removeFromView, addToView) => {
        let newFilter = typeFilter;
        if (removeFromView) {
            if (typeFilter.includes(removeFromView)) {
                let indexToDlt = newFilter.indexOf(removeFromView);
                // swapping first with indexToDlt to use 'shift'
                let first = newFilter[0];
                newFilter[0] = removeFromView;
                newFilter[indexToDlt] = first;
                newFilter.shift()
            }
        } else {
            if (!typeFilter.includes(addToView)) {
                newFilter.push(addToView);
            }
        }
        setTypeFilter(newFilter);
    }
    return (
        <div>
            <div class={FilterButtons.btnGroup}>
                <button>Apple</button>
                <button>Samsung</button>
                <button>Sony</button>
            </div>
            <div className={
                    WorkoutsStyle.row
                }
                style={
                    {backgroundImage: 'linear-gradient(rgb(10, 10, 10, 0), rgb(10, 10, 10, 0.8))'}
            }>
                <div className={
                    WorkoutsStyle.column
                }>
                    <img src={
                            workoutsUrls[0].url
                        }
                        alt={
                            workoutsUrls[0].type
                        }/>
                    <img src={
                            workoutsUrls[1].url
                        }
                        alt={
                            workoutsUrls[1].type
                        }/>
                    <img src={
                            workoutsUrls[2].url
                        }
                        alt={
                            workoutsUrls[2].type
                        }/>
                    <img src={
                            workoutsUrls[3].url
                        }
                        alt={
                            workoutsUrls[3].type
                        }/>
                </div>
                <div className={
                    WorkoutsStyle.column
                }>
                    <img src={
                            workoutsUrls[0].url
                        }
                        alt={
                            workoutsUrls[0].type
                        }/>
                    <img src={
                            workoutsUrls[1].url
                        }
                        alt={
                            workoutsUrls[1].type
                        }/>
                    <img src={
                            workoutsUrls[3].url
                        }
                        alt={
                            workoutsUrls[3].type
                        }/>
                    <img src={
                            workoutsUrls[2].url
                        }
                        alt={
                            workoutsUrls[2].type
                        }/>
                </div>
                <div className={
                    WorkoutsStyle.column
                }>
                    <img src={
                            workoutsUrls[1].url
                        }
                        alt={
                            workoutsUrls[1].type
                        }/>
                    <img src={
                            workoutsUrls[0].url
                        }
                        alt={
                            workoutsUrls[0].type
                        }/>
                    <img src={
                            workoutsUrls[2].url
                        }
                        alt={
                            workoutsUrls[2].type
                        }/>
                    <img src={
                            workoutsUrls[3].url
                        }
                        alt={
                            workoutsUrls[3].type
                        }/>
                </div>
            </div>
        </div>
    );
};

export default Workouts;
