import { NavLink } from 'react-router-dom';
import classes from './TabsComp.module.css'
import './Button.css';

const TabsComp = ({loggedIn}) => {

    return (
        <header>

        <div className={classes.header}>
            <nav>
                <ul>

                    <li>
                        <NavLink activeClassName={classes.active} to='/Contact'>צור קשר</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/personal/nutrion'>תזונה</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/personal/workoutVideos'>הקלטות</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/Gallery'>גלריה</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/Prices'>מחירון</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/Workouts'>אימונים</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/Home'>דף הבית</NavLink>
                    </li>
               </ul>
            </nav>
        </div>
        </header>
    )
}

export default TabsComp;
