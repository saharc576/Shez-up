import React from 'react'
import ReactPlayer from 'react-player'
import '../css/HomeVideo.css'

const Home = () => {
    return (
        <div className='player-wrapper' >
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                 className='react-player' width='100%' height='100%' playing />
                 
        </div>
    );
};

export default Home;
