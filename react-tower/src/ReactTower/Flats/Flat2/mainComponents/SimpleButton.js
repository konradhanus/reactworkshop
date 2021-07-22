import React, { useState } from 'react';
import {actionCreator} from './../../../Counter/action';
import { connect } from "react-redux";

function SimpleButton(props) {

  const [onInterval, changeOnInterval] = useState(null);

  const onClick = ()=>{
    props.handleClickFunction();

    if (props.buttonStatus === 'on' || props.buttonStatus == 0) {
        changeOnInterval(setInterval(() => {
          props.addFloor2()
        }, 1000));
    } else {
      changeOnInterval(clearInterval(onInterval));
    } 
  }



  return (
     <div>
        <button
          onClick={onClick}
          style = {props.styles}
        >
            {props.name}
        </button>
      </div>
    );
  }

export default connect(null, actionCreator)(SimpleButton);
