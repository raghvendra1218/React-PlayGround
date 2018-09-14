import React from 'react';
import './userOutput.css'

const UserOutput = (props) => {
    return (
        <div className ="UserOutput">
            <p>Hello World!</p>
            <p>This is {props.name} and my age is {props.age}</p>
        </div>
    )
}

export default UserOutput;