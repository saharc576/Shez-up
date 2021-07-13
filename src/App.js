import React, {Suspense, useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import TabsComp from './components/tabs/TabsComp.js';
import Home from './pages/Home'
import Nutrition from './pages/Nutrition.js';
import {projectAuth} from './firebase/Config.js';
import PopupAuth from './components/authentication/PopUpAuth.js';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner.js';

const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));
const WorkoutVideos = React.lazy(() => import('./pages/WorkoutVideos.js'));
const Prices = React.lazy(() => import('./pages/Prices'));
const Workouts = React.lazy(() => import('./pages/Workouts'));

function App() {

    const [user, setUser] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const btnText = user ? 'התנתק' : 'התחבר'

    const userHandle = () => {
        setUser(!user)
    }

    const popupHandler = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    const blurOrNot = isPopupOpen ? { filter: 'blur(5px)' } : null;
    return (
        <div style={
            {
                position: 'relative',
                minWidth: '950px'
            }
        }>
            <TabsComp loggedIn={user}/>
            <PopupAuth buttonText="הירשם"
                setUser={userHandle}
                setPopup={popupHandler}/>
            <PopupAuth buttonText={btnText}
                setUser={userHandle}
                setPopup={popupHandler}/>
            <main style={{ filter: 'blur(5px)' }} >
                <Suspense fallback={<div className="centered"> <LoadingSpinner /> </div>}>
                    <Switch >
                        <Route path='/' exact>
                            <Redirect to='/Home'/>
                        </Route>
                        <Route path='/Home'>
                            <Home/>
                        </Route>
                        <Route path='/Workouts'>
                            <Workouts/>
                        </Route>
                        <Route path='/Prices'>
                            <Prices/>
                        </Route>
                        <Route path='/Gallery'>
                            <GalleryPage/>
                        </Route>
                        <Route path='/personal/nutrion' exact>
                            <Nutrition user={user}/>
                        </Route>
                        <Route path='/personal/workoutVideos' exact>
                            <WorkoutVideos user={user}/>
                        </Route>
                        <Route path='/Contact'>
                            sfgs
                        </Route>
                    </Switch>
                </Suspense>
            </main>
        </div>
    );
}

export default App;
// const fetchWorkoutCards = () => {
//     fetch('https://shez-up-default-rtdb.europe-west1.firebasedatabase.app/')
// }
