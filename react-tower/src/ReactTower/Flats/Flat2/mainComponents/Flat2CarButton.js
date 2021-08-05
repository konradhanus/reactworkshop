import { actionCreator } from '../../../Car/action';
import React from 'react';
import { connect } from "react-redux";

function Flat2CarButton(props) {
    return (
        <button 
            style = {props.styles} 
            onClick={ props.getCarToFloor2 } > {props.name}
        </button>
    )
}

export default connect(null, actionCreator)(Flat2CarButton);