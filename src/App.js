import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import TabsComp from './components/tabs/TabsComp.js';
import Home from './pages/Home'
import GalleryPage from './pages/GalleryPage'
import Prices from './pages/Prices'
import Workouts from './pages/Workouts'
import { projectAuth } from './firebase/Config.js';
import PopupAuth from './components/popUpAuth/PopUpAuth.js';



function App() {

    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenSignin, setIsOpenSignin] = useState(false);
    const [user, setUser] = useState(null);
    
    const loginHandler = async (email, password) => {
        try {
            const user = await projectAuth.signInWithEmailAndPassword(email, password);
            setUser(user);
        } catch (err) {
            alert(err);
        } finally {
            setIsOpenLogin(false);
        }
        // popup login form
        // compare user name and password with data base
        // grent access or deny 
    }

    const signInHandler = async (email, password) => {
        // popup login form
        // compare user name and password with data base
        // grent access or deny 
        try {
            const user = await projectAuth.createUserWithEmailAndPassword(email, password);
            setUser(user);
        } catch (err) {
            alert(err);
        } finally {
            setIsOpenSignin(false);
        }
    }

    const authHandler = (msg) => {
        if (msg === 'login') {
            setIsOpenLogin(!isOpenLogin);
        } else if (msg === 'signin') {
            setIsOpenSignin(!isOpenSignin)
        } else {
            projectAuth.signOut();
        }
    }
    

    return (
        <div>
            <TabsComp loggedIn={user} tryLogin={() => authHandler('login')} logout={() => authHandler('logout')} trySignIn={() => signInHandler('signin')}/>
            <PopupAuth buttonText="הירשם" onClick={(email, password) => signInHandler(email, password)}/>
            <PopupAuth buttonText="התחבר" onClick={(email, password) => loginHandler(email, password)}/>
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
