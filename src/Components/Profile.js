// import React, { Component } from 'react';
import { useUser } from '../utils/userContext';
// import { useUser } from '../utils/userContext';
import { useNavigate } from 'react-router-dom';

import React from 'react'

function Profile(props) {
    const { user, setUser  } = useUser();
    const navigate = useNavigate();
    console.log('user.photoURL:', user ? user.photoURL : 'No user or photoURL');

    const onButtonClick=()=>{
        props.onButtonClick(0)
    }
    const handleLogOut = () => {
        setUser(null);
        // <Navigate path='/login' />
        navigate('/login');

    }
    return (
        <div>
            <div className='row'>
                <div className='col-12' style={{ borderBottom: "1px #e2e2e2 solid" }}>
                    <button onClick={onButtonClick} className='btn btn-secondary btn-sm'> Go back</button>
                    <h3 className='text-center'>
                        Profile
                    </h3>
                </div>

                <div className='col-12' style={{
                    textAlign: "center"
                }}>
                    <img src={user.photoURL} alt="User Profile" className='rounded-circle mt-3' style={{ width: 150, height: 150 }} />
                </div>
                <div className='col-12 mt-5'>
                    <p className='text-info'><b>Your Name</b></p>
                    <h3 className='text-dark'>{user.displayName}</h3>
                </div>

                <div className='col-12 mt-5'>
                    <p className='text-info'><b>About</b></p>
                    <h3 className='text-dark'>I Dont what am i doing here but i want to sleep </h3>
                </div>

            </div>
            <div className='col-12 mt-2'>
                <button onClick={handleLogOut} className='btn btn-outline-danger'>Log out</button>

            </div>
        </div>
    )
}


export default Profile;