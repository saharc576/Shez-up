import React from 'react'
import {useState} from 'react';
import WorkoutsStyle from '../css/Workouts.module.css'
import FilterButtons from '../css/FilterButtonWorkouts.module.css'
import { isBrowser } from "react-device-detect";


const Workouts = () => {
    const workoutsUrls = [
        {
            workout: "front lever",
            type: "Upper body",
            url: "https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/frontLever.jpeg?alt=media&token=129ee21d-79aa-4fcf-a8bb-695993b2ac37"
        },
        {
            workout: "muscleUp",
            type: "Upper body",
            url: "https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/muscleUp.jpeg?alt=media&token=87554036-e86a-4beb-9f78-2201da3b08a0"
        },
        {
            workout: "one hand muscleup",
            type: "Upper body",
            url: "https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/one%20hand%20pullUp.jpeg?alt=media&token=28bc8371-5425-4bdb-a179-91e62db4534f"
        },
        {
            workout: "pistol",
            type: "Lower body",
            url: "https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/pistol%20squat.jpeg?alt=media&token=c515546a-8ac3-477e-bdf8-27a379b2f51f"
        }, {
            workout: "Super set",
            type: "Full body",
            url: "https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/Super%20set.jpeg?alt=media&token=995c2f93-9be9-4931-a18a-5a8a0f178964"
        }
    ];


    const [showUpperBody, setShowUpperBody] = useState(true);
    const [showLowerBody, setShowLowerBody] = useState(true);
    const [showFullBody, setShowFullBody] = useState(true);
    const [showAll, setShowAll] = useState(true);


    const filterHandler = (typeToShow) => {
        if (typeToShow === "Upper body") {
            setShowFullBody(false);
            setShowLowerBody(false);
            setShowUpperBody(true);
            setShowAll(false);
        } else if (typeToShow === "Lower body") {
            setShowFullBody(false);
            setShowLowerBody(true);
            setShowUpperBody(false);
            setShowAll(false);
        } else if (typeToShow === "Full body") {
            setShowFullBody(true);
            setShowLowerBody(false);
            setShowUpperBody(false);
            setShowAll(false);
        } else {
            setShowFullBody(true);
            setShowLowerBody(true);
            setShowUpperBody(true);
            setShowAll(true);
        }

    }
    if (!isBrowser) {
        return (
            <div className={
                WorkoutsStyle.row
            }
            style={
                {marginTop: '3rem'}
        }>
            <div className={
                WorkoutsStyle.column
            }>
                {
                (showUpperBody || showAll) && <img src={
                        workoutsUrls[0].url
                    }
                    alt={
                        workoutsUrls[0].type
                    }/>
            }
                {
                (showUpperBody || showAll) && <img src={
                        workoutsUrls[1].url
                    }
                    alt={
                        workoutsUrls[1].type
                    }/>
            }
                {
                (showUpperBody || showAll) && <img src={
                        workoutsUrls[2].url
                    }
                    alt={
                        workoutsUrls[2].type
                    }/>
            }
                {
                (showUpperBody || showAll) && <img src={
                        workoutsUrls[3].url
                    }
                    alt={
                        workoutsUrls[3].type
                    }/>
            } </div>
            <div className={
                WorkoutsStyle.column
            }>
                {
                (showUpperBody || showAll) && <img src={
                        workoutsUrls[0].url
                    }
                    alt={
                        workoutsUrls[0].type
                    }/>
            }
                {
                (showUpperBody || showAll) && <img src={
                        workoutsUrls[1].url
                    }
                    alt={
                        workoutsUrls[1].type
                    }/>
            }
                {
                (showUpperBody || showAll) && <img src={
                        workoutsUrls[2].url
                    }
                    alt={
                        workoutsUrls[2].type
                    }/>
            }
                {
                (showLowerBody || showAll) && <img src={
                        workoutsUrls[3].url
                    }
                    alt={
                        workoutsUrls[3].type
                    }/>
            } </div>
            <div className={
                WorkoutsStyle.column
            }>
                {
                (showUpperBody || showAll) && <img src={
                        workoutsUrls[1].url
                    }
                    alt={
                        workoutsUrls[1].type
                    }/>
            }
                {
                (showUpperBody || showAll) && <img src={
                        workoutsUrls[0].url
                    }
                    alt={
                        workoutsUrls[0].type
                    }/>
            }
                {
                (showUpperBody || showAll) && <img src={
                        workoutsUrls[3].url
                    }
                    alt={
                        workoutsUrls[3].type
                    }/>
            }
                {
                (showLowerBody || showAll) && <img src={
                        workoutsUrls[3].url
                    }
                    alt={
                        workoutsUrls[3].type
                    }/>
            }
                {
                (showFullBody || showAll) && <img src={
                        workoutsUrls[4].url
                    }
                    alt={
                        workoutsUrls[4].type
                    }/>
            } </div>
            </div>
        );
    }
    return (
        <div>
            <div style={
                {paddingBottom: '2rem'}
            }>
                <ul className={
                    FilterButtons.ul
                }>
                    <li className={
                        FilterButtons.li
                    }>
                        <button className={
                                FilterButtons.button
                            }
                            onClick={
                                () => filterHandler("Show all")
                        }>Show all</button>
                    </li>
                    {
                    showUpperBody && <li className={
                        FilterButtons.li
                    }>
                        <button className={
                                FilterButtons.button
                            }
                            onClick={
                                () => filterHandler("Upper body")
                        }>Upper body</button>
                    </li>
                }
                    {
                    showLowerBody && <li className={
                        FilterButtons.li
                    }>
                        <button className={
                                FilterButtons.button
                            }
                            onClick={
                                () => filterHandler("Lower body")
                        }>Lower body</button>
                    </li>
                }
                    {
                    showFullBody && <li className={
                        FilterButtons.li
                    }>
                        <button className={
                                FilterButtons.button
                            }
                            onClick={
                                () => filterHandler("Full body")
                        }>Full body</button>
                    </li>
                } </ul>
            </div>
            <div className={
                    WorkoutsStyle.row
                }
                style={
                    {marginTop: '3rem'}
            }>
                <div className={
                    WorkoutsStyle.column
                }>
                    {
                    (showUpperBody || showAll) && <img src={
                            workoutsUrls[0].url
                        }
                        alt={
                            workoutsUrls[0].type
                        }/>
                }
                    {
                    (showUpperBody || showAll) && <img src={
                            workoutsUrls[1].url
                        }
                        alt={
                            workoutsUrls[1].type
                        }/>
                }
                    {
                    (showUpperBody || showAll) && <img src={
                            workoutsUrls[2].url
                        }
                        alt={
                            workoutsUrls[2].type
                        }/>
                }
                    {
                    (showUpperBody || showAll) && <img src={
                            workoutsUrls[3].url
                        }
                        alt={
                            workoutsUrls[3].type
                        }/>
                } </div>
                <div className={
                    WorkoutsStyle.column
                }>
                    {
                    (showUpperBody || showAll) && <img src={
                            workoutsUrls[0].url
                        }
                        alt={
                            workoutsUrls[0].type
                        }/>
                }
                    {
                    (showUpperBody || showAll) && <img src={
                            workoutsUrls[1].url
                        }
                        alt={
                            workoutsUrls[1].type
                        }/>
                }
                    {
                    (showUpperBody || showAll) && <img src={
                            workoutsUrls[2].url
                        }
                        alt={
                            workoutsUrls[2].type
                        }/>
                }
                    {
                    (showLowerBody || showAll) && <img src={
                            workoutsUrls[3].url
                        }
                        alt={
                            workoutsUrls[3].type
                        }/>
                } </div>
                <div className={
                    WorkoutsStyle.column
                }>
                    {
                    (showUpperBody || showAll) && <img src={
                            workoutsUrls[1].url
                        }
                        alt={
                            workoutsUrls[1].type
                        }/>
                }
                    {
                    (showUpperBody || showAll) && <img src={
                            workoutsUrls[0].url
                        }
                        alt={
                            workoutsUrls[0].type
                        }/>
                }
                    {
                    (showUpperBody || showAll) && <img src={
                            workoutsUrls[3].url
                        }
                        alt={
                            workoutsUrls[3].type
                        }/>
                }
                    {
                    (showLowerBody || showAll) && <img src={
                            workoutsUrls[3].url
                        }
                        alt={
                            workoutsUrls[3].type
                        }/>
                }
                    {
                    (showFullBody || showAll) && <img src={
                            workoutsUrls[4].url
                        }
                        alt={
                            workoutsUrls[4].type
                        }/>
                } </div>
            </div>
        </div>
    );
};

export default Workouts;
