import firebase from 'firebase/app';
import "firebase/auth"
import {projectAuth} from '../../firebase/Config'
  
export const register = async({email, password})=>{
    const resp = await projectAuth.createUserWithEmailAndPassword(email, password);
    return resp.user;
}
  
export const login = async({email, password})=>{
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    return res.user;
}

export const logout = async () => {
    projectAuth.signOut();
}