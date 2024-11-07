// import React, { useEffect } from 'react';
import { auth, provider } from './FirebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';
import { useUser } from '../utils/userContext'; 
// import firebase from 'firebase';
import { getDatabase, ref, set } from 'firebase/database';

const Login = () => {

    // const [user, setUser] = useState(null);
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            setUser(user);

            //Register new users to firebase database
            const database = getDatabase();
            set(ref(database, 'users/'+ user.uid),{
                name: user.displayName,
                email: user.email,
                dp: user.photoURL
            });
            navigate('/');
            console.log(user);
            // this.state.user(user);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
            <div>
                <div className='navbar'>
                    <h3 className='ms-2 text-white'>
                        <img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png' style={{ width: 50, height: 50 }}></img>
                        <b>WhatsApp</b>
                    </h3>

                </div>


                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h1 className='display-4 text-center'>
                                        To chat with someone signin with Google
                                    </h1>
                                <button className=' btn btn-outline-secondary btn-lg btn-block w-100' onClick={handleGoogleSignIn}> Sign in with  Google</button>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }


export default Login;