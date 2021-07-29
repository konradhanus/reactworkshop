import { actionCreator } from '../../../Car/action';
import React from 'react';
import { connect } from "react-redux";

function CarButton(props) {
    return (
        <button style={{
            width: '50px',
            height: '40px',
            backgroundColor: "white",
            borderRadius: '20px',
            margin: '10px',
            transform: "rotate(270deg)",
        }} onClick={ props.getCarToFloor7 } > CAR </button>
    )
}

export default connect(null, actionCreator)(CarButton);