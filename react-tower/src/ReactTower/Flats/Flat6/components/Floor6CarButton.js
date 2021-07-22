import { actionCreator } from '../../../Car/action';
import React from 'react';
import { connect } from "react-redux";

function Floor6CarButton(props) {
    return (
        <button style={{
            height: "20px",
            backgroundColor: "white",
            color: "black",
            border: "0",
            transform: "rotate(270deg)",
            marginTop: "10px"
        }} onClick={ props.getCarToFloor6 }>CAR</button>
    )
}

export default connect(null, actionCreator)(Floor6CarButton);