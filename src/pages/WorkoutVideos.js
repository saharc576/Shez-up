import WorkoutVid from '../css/WorkoutsVid.module.css'
import ButtonsStyle from '../css/FilterButtonWorkouts.module.css'

const WorkoutVideos = () => {

    return (
        <section>
            <div style={{paddingBottom:'2rem'}}>
                <ul className={ButtonsStyle.ul}> 
                <li className={ButtonsStyle.li}> <button className={ButtonsStyle.button} >Show all</button> </li>
                <li className={ButtonsStyle.li}> <button className={ButtonsStyle.button} >Upper body</button> </li>
                <li className={ButtonsStyle.li}> <button className={ButtonsStyle.button} >Lower body</button> </li>
                <li className={ButtonsStyle.li}> <button className={ButtonsStyle.button} >Full body</button> </li>
                </ul>
            </div>

            <div className={
                    WorkoutVid.container
                }
                >
                <div className={
                    WorkoutVid.row
                } dir="rtl">  
               <button > הקלטות אימונים </button>

                </div>
            </div>
        </section>
    );
};

export default WorkoutVideos;
