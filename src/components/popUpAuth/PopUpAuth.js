import React, {useState , useRef} from "react";
import Popup from 'reactjs-popup';
import './PopUpAuth.css'

const PopupAuth = ({buttonText, onClick}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    return (
        <Popup
    trigger={<button className={buttonText === 'התחבר' ? "sign-in" : "log-in" }> {buttonText} </button>}
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
            <form action="">
                <h2> Email </h2>
                <input ref={emailRef}
                    type="email"/>
                <h2> Password </h2>

                <input ref={passwordRef}
                    type="password"/>
                <button className="button" onClick={() => onClick(emailRef, passwordRef)}>
                    {buttonText === 'התחבר'?
                                    'התחבר' :
                                    'הירשם'}</button>
            </form>
        </div>
        </div>
      </div>
    )}
  </Popup>
        
    );
};

export default PopupAuth;
