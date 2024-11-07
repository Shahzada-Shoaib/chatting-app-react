import { signInWithPopup } from 'firebase/auth';
import {auth, provider } from '../Components/FirebaseConfig';

export const handleGoogleSignIn = () => {

    let user = null;

    signInWithPopup(auth, provider).then((result) => {
        user = result.user;
        console.log(user);
    }).catch((err) => {
        console.log(err);
    })
    return user;
}
