import {NavLink} from 'react-router-dom';
import classes from './TabsComp.module.css'

const TabsComp = ({loggedIn}) => {

    return (
        <header >
            <img src="https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/shorti.png?alt=media&token=8cd009d2-c309-4273-b7b8-57f292f9b890" 
                className={classes.icon}/> 
                <ul style={{listStyleType: 'none' , position: 'absolute', alignItems: 'center', right: '0', top: '0'}} >
                    <li style={{float: 'right'}}> {
                        !loggedIn && <button className={classes.button} >
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/Login'>כניסה</NavLink>
                        </button>
                    } </li>
                    <li style={{float: 'right'}}> {
                        !loggedIn && <button className={classes.button} >
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/Register'>הרשמה</NavLink>
                        </button>
                    } </li>
                    <li style={{float: 'right'}}> {
                        loggedIn && <button className={classes.button} >
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/Logout'>התנתק</NavLink>
                        </button>
                    } </li>
                </ul>
            <div className={
                classes.header
            }>
                <nav>
                    <ul>

                        <li>
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/Contact'>צור קשר</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/personal/nutrion'>תזונה</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/personal/workoutVideos'>הקלטות</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/Gallery'>גלריה</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/Prices'>מחירון</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/Workouts'>אימונים</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/Home'>דף הבית</NavLink>
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
    )
}

export default TabsComp;
