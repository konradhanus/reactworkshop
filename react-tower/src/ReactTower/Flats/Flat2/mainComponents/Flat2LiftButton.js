import { actionCreator } from '../../../Lift/action';
import React from 'react';
import { connect } from "react-redux";

function Flat2LiftButton(props) {

    const moveLift = () => {
        props.moveToFloor2();
    }

    return (
        <button 
            style = {props.styles} 
            onClick = {() => {
                props.moveToFloor2();
            }}>
                2
            </button>
    )
}

export default connect(null, actionCreator)(Flat2LiftButton);