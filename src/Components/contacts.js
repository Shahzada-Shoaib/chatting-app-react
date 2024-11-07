import React from 'react';
import Thread from './Thread';
// import { Logout } from '../utils/logout';

const Contacts = (props) => {
       
    
    
    const onIconClick =()=>{
        props.onIconClick(1);

    }
     const onButtonClick=()=>{
        props.onIconClick(2);   
     }
    return (

            <div>
                <div className='row'>
                    <div className='col-12'>
                        <img onClick={onIconClick} alt='logo' src={props.photo} style={{ width: 50, height: 50 }}></img>
                        {props?.name && <p>{props.name}</p>}


                        <button onClick={onButtonClick} className='btn btn-sm btn-outline-secondary float-end mt-2'>New Message</button>

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

export default Contacts;