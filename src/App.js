import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import TabsComp from './components/tabs/TabsComp.js';
import Home from './pages/Home'
import Gallery from './pages/Gallery'


function App() {

    return (
        <div>
            <TabsComp/>
            <main>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/Home'/>
                    </Route>
                    <Route path='/Home'>
                        <Home/>
                    </Route>
                    <Route path='/Workouts' exact>
                        sfgs
                    </Route>
                    <Route path='/Workouts/:workoutId'>
                        sfgs
                    </Route>
                    <Route path='/Prices'>
                        sfgs
                    </Route>
                    <Route path='/Gallery'>
                        <Gallery/>
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
