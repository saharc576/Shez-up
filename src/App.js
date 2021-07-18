import React, {Suspense, useState} from 'react';
import {Route, Switch, Redirect, useLocation} from 'react-router-dom'
import TabsComp from './components/tabs/TabsComp.js';
import Home from './pages/Home'
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner.js';
import Login from './components/authentication/Login.js';
import Register from './components/authentication/Register.js';
import Logout from './components/authentication/Logout.js';
import BackgroundStyle from './css/Background.module.css'
import SocialStyle from './css/SocialNetworks.module.css'
import { Linking } from 'react-native';
import { Phone } from 'react-feather';
import { useEffect } from 'react';


const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));
const WorkoutVideos = React.lazy(() => import('./pages/WorkoutVideos.js'));
const Prices = React.lazy(() => import('./pages/Prices'));
const Workouts = React.lazy(() => import('./pages/Workouts'));
const Nutrition = React.lazy(() => import('./pages/Nutrition'));

let location;
function usePageView () {
    location = useLocation().pathname;
    useEffect(() => {
   }, [location]);
}

function App() {
    usePageView();
    const [user, setUser] = useState(false);


    const mainStyle = (location === "/Home" || location === "/Workouts") 
                        ? {marginTop: '2rem'} 
                        : {marginTop: '7rem'};

    const phoneNumber = "972537171929";
    
    const sendMsgHandler = () => {
        const msg = `https://wa.me/${phoneNumber}`;
        Linking.openURL(msg);
    }
    
    
    return (
        <div className={BackgroundStyle.bg}>
            <TabsComp loggedIn={user}/>
            <main style={mainStyle}>
                <Suspense fallback={<div className="centered"> <LoadingSpinner /> </div>}>
                    <Switch >
                        <Route path='/' exact>
                            <Redirect to='/Home'/>
                        </Route>
                        <Route path='/Home' component={Home}></Route>
                        <Route path='/Workouts' component={Workouts}></Route>
                        <Route path='/Prices' component={Prices}></Route>
                        <Route path='/Gallery' component={GalleryPage}></Route>
                        <Route path='/personal/nutrion' exact>
                            {user && <Nutrition />}
                            {!user && <Redirect to='/Login' />}
                        </Route>
                        <Route path='/personal/workoutVideos' exact >
                            {user && <WorkoutVideos />}
                            {!user && <Redirect to='/Login' />}
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
            <button className={SocialStyle.whatsapp} onClick={sendMsgHandler}>
                <Phone/>
            </button>

        </div>
    );
}

export default App;
