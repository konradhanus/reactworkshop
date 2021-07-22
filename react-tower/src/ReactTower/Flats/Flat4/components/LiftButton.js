import { actionCreator } from '../../../Lift/action';
import React from 'react';
import { connect } from "react-redux";

function LiftButton(props) {
    return (
        <button style={{
            alignItems: "center",
            backgroundColor: "lightgray",
            border: "1px solid black",
            borderRadius: "50%",
            color: "black",
            display: "inline-flex",
            fontSize: "0.7rem",
            height: "20px",
            justifyContent: "center",
            margin: "10px",
            transform: "rotate(270deg)",
            width: "20px",
        }} onClick={ props.moveToFloor4 }>{props.label ? props.label : 4}</button>
    )
}

export default connect(null, actionCreator)(LiftButton);