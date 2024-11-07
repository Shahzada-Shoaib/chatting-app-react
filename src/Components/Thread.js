import React, { Component } from 'react';

class Thread extends Component {
    state = {}

    render() {
        return (
            <div className='row' style={{ borderBottom: "1px #e2e2e2 solid" }}>
                <div className='col-3 mt-3'>
                    <img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png' style={{ width: 60, height: 60 }}></img>

                </div>
                <div className='col-9 p-0' style={{ marginLeft: -20 }}>
                    <p className='mt-3'>
                        <span style={{ fontSize: 20 }}>
                            <b>
                                Ayyan Bhatti
                            </b>
                        </span>
                        <span className="float-end"><small>11:30</small></span>
                        <br />
                        <span className='text-secondary'>How are you?</span>
                    </p>

                </div>

            </div>

        )
    }
}

export default Thread;