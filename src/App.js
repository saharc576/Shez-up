import React, {useEffect, useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import TabsComp from './components/tabs/TabsComp.js';
import Home from './pages/Home'
import GalleryPage from './pages/GalleryPage'
import Prices from './pages/Prices'
import Workouts from './pages/Workouts'
import {projectAuth} from './firebase/Config.js';
import PopupAuth from './components/authentication/PopUpAuth.js';


function App() {

    // const [isOpenLogin, setIsOpenLogin] = useState(false);
    // const [isOpenSignin, setIsOpenSignin] = useState(false);
    const [user, setUser] = useState(false);

    const btnText = user ? 'התנתק' :
                            'התחבר'
                            
    return (
        <div style={
            {
                position: 'relative',
                minWidth: '950px'
            }
        }>
            <TabsComp loggedIn={user}/>
            <PopupAuth buttonText="הירשם" onClick={() => setUser(!user)}/>
            <PopupAuth buttonText={btnText} onClick={() => setUser(!user)}/>
            <main >
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/Home'/>
                    </Route>
                    <Route path='/Home'>
                        <Home/>
                    </Route>
                    <Route path='/Workouts' exact>
                        <Workouts/>
                    </Route>
                    <Route path='/Prices'>
                        <Prices/>
                    </Route>
                    <Route path='/Gallery'>
                        <GalleryPage/>
                    </Route>
                    <Route path='/personal/nutrion'>
                        nutriotion content
                    </Route>
                    <Route path='/personal/workoutVideos'>
                        nutriotion content
                    </Route>
                    <Route path='/Contact'>
                        sfgs
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
// const fetchWorkoutCards = () => {
//     fetch('https://shez-up-default-rtdb.europe-west1.firebasedatabase.app/')
// }
