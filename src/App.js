import React, {Suspense, useState} from 'react';
import {Route, Switch, Redirect, Prompt} from 'react-router-dom'
import TabsComp from './components/tabs/TabsComp.js';
import Home from './pages/Home'
import Nutrition from './pages/Nutrition.js';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner.js';
import Login from './components/authentication/Login.js';
import Register from './components/authentication/Register.js';
import Logout from './components/authentication/Logout.js';
import './css/Background.css'

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



    return (
        <div className="bg">
            <TabsComp loggedIn={user}/>
            <main >
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
                            {user && <Nutrition />}
                            {!user && <Redirect to='/Login' />}
                        </Route>
                        <Route path='/personal/workoutVideos' exact >
                            {user && <WorkoutVideos />}
                            {!user && <Redirect to='/Login' />}
                        </Route>
                        <Route path='/Contact'>
                            sfgs
                        </Route>
                        <Route path='/Login'>
                            <Login _setUser={setUser}/>
                        </Route>
                        <Route path='/Register'>
                            <Register _setUser={setUser}/>
                        </Route>
                        <Route path='/Logout'>
                            <Logout _setUser={setUser}/>
                            {!user && <Redirect to='/Home'/>}
                            
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
