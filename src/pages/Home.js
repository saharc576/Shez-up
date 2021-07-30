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
            <div className={HomeStyle.aboutContainer} style={{backgroundImage: 'linear-gradient(rgb(0, 0, 0, 0.3), rgb(0, 0, 0, 0.8))', zIndex:'-1',  paddingLeft:'18%'}}>
                <ReactPlayer controls={true} 
                            url="https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/SHEZ%20UP%201.mp4?alt=media&token=e7ec4b7b-5277-479c-875c-ee7410eb9173" 
                            width="85%" 
                            height="500px"
                            zIndex='-1'
                            />
            </div>
           <div className={HomeStyle.aboutContainer} style={{backgroundImage: 'linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 1.5))' }}>
            <header dir="rtl" style={{textAlign:'center', fontSize:'50px', marginBottom:'30px', color:'deepskyblue'}}>
                לקוחות מספרים
            </header>
               <Recommend/>
           </div>
        </div>
    );
};

export default Home;
