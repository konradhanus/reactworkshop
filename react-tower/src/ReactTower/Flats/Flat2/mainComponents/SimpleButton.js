import React from "react";


function SimpleButton(props) {

    return (
     <div>
        <button
          onClick={props.handleClickFunction}
          style = {props.styles}
        >
            {props.name}
        </button>
      </div>
    );
  }
export default SimpleButton;