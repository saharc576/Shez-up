import React, {useState} from 'react';
import Tabs from './components/tabs/TabsComp.js'


function App() {


    const fetchWorkoutCards = () => {
        fetch('https://shez-up-default-rtdb.europe-west1.firebasedatabase.app/')
    }


    return (
        <div>
            <Tabs/>
            <button dir="rtl"> התחבר</button>
        </div>
    );
}

export default App;
