import React from 'react';

function Remote(props) {
    return (
        <button style={{
            width: "10px",
            height: "20px",
            float: "left",
            backgroundColor: "black",
            border: "0",
            marginTop: "40px"
        }} onClick={props.callback}></button>
    )
}

export default Remote;