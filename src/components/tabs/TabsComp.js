import { NavLink } from 'react-router-dom';
import classes from './TabsComp.module.css'

const TabsComp = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/Contact'>צור קשר</NavLink>
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
        </header>
    )
}

export default TabsComp;
