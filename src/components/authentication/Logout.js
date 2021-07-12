import React, {useState} from 'react'
import {logout} from './auth'


const Logout = ({_setUser}) => {
    _setUser(false)
    logout();
    return (
        <div></div>
    );
}

export default Logout;