import React from 'react'
import Thread from './Thread';
import { useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';

function UsersList(props) {

    const onButtonClick
        = () => {
            props.onButtonClick(0);
        }
        // componentDidMount(){
        //     firebase.database().ref('users/').once('value').then((snapshot)=>{
        //         console.log(snapshot.val());
        //     })
        // }
    useEffect(() => {
        const fetchData = async () => {
            const database = getDatabase();
            const userRef = ref(database, 'users/');

            try {
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 

    return (
        <div>
            <div className='row'>
                <div className='col-12'>
                    <button onClick={onButtonClick} className='btn btn-sm btn-outline-secondary mt-2'>Go Back</button>
                    <h3 className='mt-2'>All User</h3>

                </div>

            </div>
            <div className='row mt-3'>
                <div className='col-12'>
                    <input type='text' className='form-control' placeholder='Search here'></input>

                </div>

            </div>


            <div className='row mt-3' style={{ borderTop: "1px #e2e2e2 solid" }}>

            </div>
            <div className='col-12'>
                <Thread />
            </div>
            <div className='col-12'>
                <Thread />
            </div>
            <div className='col-12'>
                <Thread />
            </div>
            <div className='col-12'>
                <Thread />
            </div>
        </div>
    )
}

export default UsersList;