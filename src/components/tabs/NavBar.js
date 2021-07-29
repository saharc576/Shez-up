import {NavLink} from 'react-router-dom';
import classes from './NavBar.module.css'

const NavBar = ({loggedIn}) => {

    return (
        <header >
            <img src="https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/logo.png?alt=media&token=ddd30c5a-e91b-4843-bba7-a907c5c1b33a" 
                className={classes.icon}/> 
                <ul style={{listStyleType: 'none' , position: 'absolute', alignItems: 'center', right: '0', top: '0', zIndex:'1'}} >
                    <li style={{float: 'right'}}> {
                        !loggedIn && <button className={classes.button} style={{minWidth: '55px'}}>
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/Login' style={{color: "white"}}>כניסה</NavLink>
                        </button>
                    } </li>
                    <li style={{float: 'right'}}> {
                        !loggedIn && <button className={classes.button} >
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/Register' style={{color: "white"}}>הרשמה</NavLink>
                        </button>
                    } </li>
                    <li style={{float: 'right'}}> {
                        loggedIn && <button className={classes.button} >
                            <NavLink activeClassName={
                                    classes.active
                                }
                                to='/Logout' style={{color: "white"}}>התנתק</NavLink>
                        </button>
                    } </li>
                </ul>
            <div className={
                classes.header
            }>
                <nav >
                    <ul>

                    
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
                                to='/Home'>בית</NavLink>
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
    )
}

export default NavBar;
