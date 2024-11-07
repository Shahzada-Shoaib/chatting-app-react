
import React, { useState } from 'react';
// import Contacts from './Contacts';
import { useUser } from '../utils/userContext';
import Contacts from './contacts';
// import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import Profile from './Profile';
import UsersList from './UsersList';

const Home = () => {
    const { user } = useUser();
    const [isFlagged, setIsFlagged] = useState(0);
    // const navigate = useNavigate();

    // const handleLogOut = () => {
    //     setUser(null);
    //     // <Navigate path='/login' />
    //     navigate('/login');

    // }
    const replaceComponent = (newFlagValue) => {
        setIsFlagged(newFlagValue);

    }
    const loadComponent = () => {
        if (isFlagged === 0) {
            return <Contacts
                photo={user ? user.photoURL : null}
                name={user ? user.displayName : null}
                // logout={handleLogOut}
                onIconClick={replaceComponent}
            />
        } else if (isFlagged === 1) {
            return <Profile  onButtonClick={replaceComponent} />

        } else {
            return <UsersList onButtonClick={replaceComponent} />

        }
    }




        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card' style={{ minHeight: "600" }}>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-4' style={{ borderRight: "1px #e2e2e2 solid" }}>
                                        {loadComponent()}
                                        {/* <Contacts
                                            photo={user ? user.photoURL : null}
                                            name={user ? user.displayName : null}
                                            logout={handleLogOut} 
                                            onIconClick={replaceComponent()}
                                            /> */}
                                        {/* <Profile/> */}
                                    </div>
                                    <div className='col-8'>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Home;