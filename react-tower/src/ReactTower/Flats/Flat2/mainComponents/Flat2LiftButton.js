import { actionCreator } from '../../../Lift/action';
import React from 'react';
import { connect } from "react-redux";

function Flat2LiftButton(props) {

    return (
        <button 
            style = {props.styles} 
            onClick = {props.moveToFloor2}>
                {props.name}
        </button>
    )
}

export default connect(null, actionCreator)(Flat2LiftButton);