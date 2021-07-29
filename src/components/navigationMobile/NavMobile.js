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
            <img src="https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/logo.png?alt=media&token=ddd30c5a-e91b-4843-bba7-a907c5c1b33a" 
                className={NavBarStyle.icon}/> 
            <section style={{position: 'fixed' ,width:'100%',height:'3rem' ,backgroundColor:'#161515'}}>
                <Menu color='white' onClick={menuHandler} className={NavBarStyle.menu}/>
            </section>
            <div className={NavBarStyle.topnav}>
                    {isOpenMenu &&<NavLink to='/Login'>News</NavLink>}
                    {isOpenMenu &&<NavLink to='/Home'>Home</NavLink>}
                    {isOpenMenu &&<NavLink to='/Gallery'>News</NavLink>}
            </div>
        </div>
    );
};

export default NavMobile;
