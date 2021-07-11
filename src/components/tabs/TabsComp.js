import { NavLink } from 'react-router-dom';
import classes from './TabsComp.module.css'
import './Button.css';

const TabsComp = ({loggedIn, tryLogin}) => {
 

    return (
        <header>
        <button onClick={tryLogin} className='log-in'>click me</button>

        <div className={classes.header}>
            <nav>
                <ul>

                    <li>
                        <NavLink activeClassName={classes.active} to='/Contact'>צור קשר</NavLink>
                    </li>
                    {loggedIn && <li>
                        <NavLink activeClassName={classes.active} to='/personal/nutrion'>תזונה</NavLink>
                    </li>}
                    {loggedIn && <li>
                        <NavLink activeClassName={classes.active} to='/personal/workoutVideos'>אימונים מוקלטים</NavLink>
                    </li>}
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
