import React, {useState} from 'react';
import TabsComp from './components/tabs/TabsComp.js'


function App() {


    const fetchWorkoutCards = () => {
        fetch('https://shez-up-default-rtdb.europe-west1.firebasedatabase.app/')
    }


    return (
        <TabsComp />
    );
}

export default App;
