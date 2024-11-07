
// This file is for the reference of the Google Auth system with firebase to understand the code
//////
// This wont be linked with the App
import React from 'react'
import { auth, provider } from '../Components/FirebaseConfig';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';


function GoogleLoginREF() {
    const [user, setUser] = useState(null);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
        }).catch((err) => {
            console.log(err);
        })
    }
    const handleLogOut = () => {
        setUser(null);
    }
    return (
        <div className='wrapper'>
            <div className='box'>{
                user ? (
                    <>
                        <button className=' btn btn-primary btn-md' onClick={handleLogOut}>
                            log out</button>
                        <h3>{user.displayName}</h3>
                        <p>{user.email}</p>
                        <div className='photo'>
                            <img src={user.photoURL} alt='dp'></img>
                        </div>
                    </>
                ) : (
                    <button className=' btn btn-primary' onClick={handleGoogleSignIn}>
                        Google signin
                    </button>

                )}

            </div>
        </div>
    )
}

export default GoogleLoginREF;