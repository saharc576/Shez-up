import React, {useState} from 'react'
import {logout} from './auth'


const Logout = () => {
    return (
        logout()
    );
}

export default Logout;