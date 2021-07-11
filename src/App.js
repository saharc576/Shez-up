import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import TabsComp from './components/tabs/TabsComp.js';
import Home from './pages/Home'
import GalleryPage from './pages/GalleryPage'
import Prices from './pages/Prices'
import Workouts from './pages/Workouts'



function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    
    const loginHandler = () => {
        // popup login form
        // compare user name and password with data base
        // grent access or deny 
    }

    return (
        <div>
            <TabsComp loggedIn={loggedIn} tryLogin={loginHandler}/>
            <button>Login</button>
            <main>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/Home'/>
                    </Route>
                    <Route path='/Home'>
                        <Home/>
                    </Route>
                    <Route path='/Workouts' exact>
                        <Workouts />
                    </Route>
                    <Route path='/Prices'>
                        <Prices />
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
