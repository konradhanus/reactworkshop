import { actionCreator } from '../../../Lift/action';
import React from 'react';
import { connect } from "react-redux";

function Floor6LiftButton(props) {

    const moveLift = () => {
        props.moveToFloor6();
    }

    return (
        <button style={{
            height: "20px",
            backgroundColor: "white",
            color: "black",
            border: "0",
            transform: "rotate(270deg)",
            marginTop: "10px"
        }} onClick={ moveLift }>{ props.text }</button>
    )
}

export default connect(null, actionCreator)(Floor6LiftButton);