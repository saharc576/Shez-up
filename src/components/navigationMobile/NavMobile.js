import NavBarStyle from './NavMobile.module.css'
import {NavLink} from 'react-router-dom';
import {Menu} from 'react-feather';
import { useState } from 'react';


const NavMobile = ({loggedIn}) => {

    const [isOpenMenu, setIsOpenMenu] =useState(false);

    const menuHandler = () => {
        setIsOpenMenu(!isOpenMenu);
    }
    return (
        <div>
            <div className={
                NavBarStyle.topnav
            }>
                <Menu onClick={menuHandler} className={NavBarStyle.menu}/>
                <div >
                    {isOpenMenu &&<NavLink to='/Login'>News</NavLink>}
                    {isOpenMenu &&<NavLink to='/Home'>Home</NavLink>}
                    {isOpenMenu &&<NavLink to='/Gallery'>News</NavLink>}
                </div>
            </div>
        </div>
    );
};

export default NavMobile;
