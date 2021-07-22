import React, { useState } from 'react';
import Window from "./mainComponents/Window";
import SimpleButton from "./mainComponents/SimpleButton";

function Right() {
    
    const [nightState, checkNightState] = useState(0);

    return (
     <div>
       <SimpleButton 
          handleClickFunction = {() => {
            checkNightState(prevNightState => prevNightState == 0 ? 1 : 0);
          }} 
          name = {nightState == 0 ? 'n' : 'd'}
          buttonStatus = {nightState}
          styles = {{ 
            transform: "rotate(-90deg)",
            marginTop: "5px"
          }} 
        />

       <Window 
          night = {nightState}
        />
     </div>
    );
}
  
  export default Right;
  