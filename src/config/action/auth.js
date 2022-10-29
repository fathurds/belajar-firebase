import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";

export const registerUserAPI = (email, password) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => resolve(true))
            .catch(err => reject({ error: err.code }));
    })
}

export const loginUserAPI = (email, password) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => resolve(true))
            .catch(err => reject({ error: err.code }));
    })
}