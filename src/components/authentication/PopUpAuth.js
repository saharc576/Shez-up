import React, {useState , useRef} from "react";
import Popup from 'reactjs-popup';
import './PopUpAuth.css'
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import { logout } from "./auth";

const PopupAuth = ({buttonText, setUser}) => {
    const isLogin = buttonText === 'התחבר' ;
    const isLogout = buttonText === 'התנתק' ;
    const isRegister = buttonText === 'הירשם' ;

    if (isLogout) {
      logout();
      return (
        <button className="log-in" onClick={setUser}>{buttonText}</button>
      );
    }


    return (
      <Popup
        trigger={<button className={isLogin ? "sign-in" : "log-in" } > {buttonText} </button>}
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
              {isLogin && <Login _setUser={setUser}/>}
              {isRegister && <Register _setUser={setUser}/>}
              {isLogout && <Logout _setUser={setUser}/>}
          </div>
          </div>
        </div>
      )}
    </Popup>
        
    );
};

export default PopupAuth;
