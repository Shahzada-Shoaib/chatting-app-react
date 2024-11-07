import React from 'react'
import { auth, provider } from './FirebaseConfig';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';

function GoogleLoginWithFirebase() {

  const [user, setUser] = useState(null);


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
        )
          : (
            <button className=' btn btn-primary'>
              Google signin
            </button>


          )
      }

      </div>
    </div>)
}

export default GoogleLoginWithFirebase;