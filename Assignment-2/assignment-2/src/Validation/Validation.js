import React from 'react';

const validation =(props)=> {
    const length = props.inputLength;
    let text = 'Text too short!';
    if(length > 5) {
        text = (
            <p>Text too long!</p>
        )
    }
    return(
        <div>
            {text}
            {/* {
                length <= 5 ?
                <p>Text too short!</p> :
                <p>Text long enough!</p>
            } */}
        </div>
    )
}

export default validation;