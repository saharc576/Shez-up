import React, {useState , useRef} from "react";
import Popup from 'reactjs-popup';
import './PopUpAuth.css'
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

const PopupAuth = ({buttonText, onClick}) => {
    const isLogin = buttonText === 'התחבר' ;
    const isLogout = buttonText === 'התנתק' ;
    const isRegister = buttonText === 'הירשם' ;

    return (
        <Popup
    trigger={<button className={(isLogin || isLogout) ? "sign-in" : "log-in" } onClick={onClick}> {buttonText} </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Sign in</div>
        <div className="content">
        <div className="signin">
            {isLogin && <Login/>}
            {isLogout && <Logout/>}
            {isRegister && <Register/>}
        </div>
        </div>
      </div>
    )}
  </Popup>
        
    );
};

export default PopupAuth;
