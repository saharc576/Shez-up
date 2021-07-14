import React, {useState} from 'react'
import {register} from './auth'
import classes from './AuthForm.module.css';
import { Redirect } from 'react-router-dom'

  
const Register = ({_setUser}) => {
    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const [success, setSuccess] = useState(false);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await register(form);
            _setUser(true);
            setSuccess(!success);

        } catch (err) {
            alert(err);
        }
  
    }
    const ButtonStyle = {
        borderRadius: '4px',
        padding:'0.7rem',
        margin:'0.5rem'
    }
    return (
        <section className={classes.auth}>
            {success && <Redirect to='/Home'/>}
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className={
                    classes.control
                }>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='mail' required
                        onChange={
                            (e) => setForm({
                                ...form,
                                email: e.target.value
                            })
                        }/>
                </div>
                <div className={
                    classes.control
                }>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required
                        onChange={
                            (e) => setForm({
                                ...form,
                                password: e.target.value
                            })
                        }/>
                </div>

                <button type="submit"
                    style={ButtonStyle}
                    >
                    Submit
                </button>
            </form>
        </section>
        
  
    )
}
  
export default Register