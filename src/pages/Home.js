import React from 'react'
import ReactPlayer from 'react-player'
import About from '../components/about/About'
import HomeStyle from '../css/Home.module.css'
import Recommend from '../components/recomendations/Recommend'

const Home = () => {
    return (
        <div>
            <div className={HomeStyle.aboutContainer} style={{backgroundImage: 'linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.3))'}}>
                <About/>
            </div>
            <div className={HomeStyle.aboutContainer} style={{backgroundImage: 'linear-gradient(rgb(0, 0, 0, 0.3), rgb(0, 0, 0, 0.8))'}}>
                <ReactPlayer url="https://www.youtube.com/watch?v=CZvP7PwUAwM" width="100%" height="500px"/>
            </div>
           <div className={HomeStyle.aboutContainer} style={{backgroundImage: 'linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 1.5))' }}>
               <Recommend/>
           </div>
        </div>
    );
};

export default Home;
