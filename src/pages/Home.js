import React from 'react'
import ReactPlayer from 'react-player'
import About from '../components/about/About'
import HomeStyle from '../css/Home.module.css'
// import '../css/HomeVideo.css'

const Home = () => {
    return (
        <div>
            <div className={HomeStyle.aboutContainer} style={{backgroundImage: 'linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.3))'}}>
                <About/>
            </div>
            <div className={HomeStyle.aboutContainer} style={{backgroundImage: 'linear-gradient(rgb(0, 0, 0, 0.3), rgb(0, 0, 0, 2))'}}>
                <ReactPlayer url="https://www.youtube.com/watch?v=CZvP7PwUAwM" width="100%" height="500px"/>
            </div>
            <div className={HomeStyle.aboutContainer} style={{backgroundColor: 'rgb(0, 0, 0, 2)'}}>
            </div>
        </div>
    );
};

export default Home;
