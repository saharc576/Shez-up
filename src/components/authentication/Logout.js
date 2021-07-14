import React, {useState} from 'react'
import {logout} from './auth'
import { Redirect } from 'react-router-dom'


const Logout = ({_setUser}) => {


    _setUser(false)
    logout();

    return (
        <div>
        </div>
    );
}

export default Logout;