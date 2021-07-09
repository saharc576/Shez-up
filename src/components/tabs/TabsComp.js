import React, {FunctionComponent, useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './TabsComp.css';
import About from './../about/About'
import WorkoutCard from './../workoutCard/WorkoutCard'
import Contact from './../contact/Contact'

const TabsComp = (props) => {
    const tabsList = ['צור קשר', 'גלריה', 'מחירון', 'אימונים', 'דף הבית']
    const [currTab, setcurrTab] = useState(tabsList.length -1);
    
    const changeTab = (index) => {
        setcurrTab(index);
    }

    return (
        <Tabs defaultIndex={tabsList.length-1}>
            <TabList >
                <Tab onClick={() => changeTab(0)}>{tabsList[0]}</Tab>
                <Tab onClick={() => changeTab(1)}>{tabsList[1]}</Tab>
                <Tab onClick={() => changeTab(2)}>{tabsList[2]}</Tab>
                <Tab onClick={() => changeTab(3)}>{tabsList[3]}</Tab>
                <Tab onClick={() => changeTab(4)}>{tabsList[4]}</Tab>
            </TabList>
            
            {
               currTab == 4 ? <About/> :
               currTab == 3 ? <WorkoutCard/> :
               currTab == 2 ? "two" :
               currTab == 1 ? "one" :
               <Contact/> 

            }

            
        </Tabs>
    )
}

export default TabsComp;