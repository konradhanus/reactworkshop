import React, { useState } from 'react';
import Window from "./mainComponents/Window";
import SimpleButton from "./mainComponents/SimpleButton";

import { JElectricityMeterContext }  from "../../JElectricityMeter";

function Right() {
    
    const [nightState, checkNightState] = useState(0);

    return (
      <JElectricityMeterContext.Consumer>
      { meter => 

        <div>
          <SimpleButton 
              handleClickFunction = {() => {
                if (nightState == 0) {
                  setInterval(meter.increaseFlatBill(2), 1000);  
                }
                
              checkNightState(prevNightState => prevNightState == 0 ? 1 : 0);
              }} 
              name = {nightState == 0 ? 'n' : 'd'}
              styles = {{ 
                transform: "rotate(-90deg)",
                marginTop: "5px"
              }} 
          />

          <Window 
            night = {nightState}
          />
        </div>
      }
      </JElectricityMeterContext.Consumer>
    );
}
  
  export default Right;
  