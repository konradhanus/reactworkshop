import React, { useState } from 'react';
import SimpleButton from "./mainComponents/SimpleButton";
import TV from "./mainComponents/Tv";
import Meter from "./mainComponents/Meter";
import { JElectricityMeterContext }  from "../../JElectricityMeter";



function Left() {

  const [TVstate, toggleTV] = useState('off');

  console.log(JElectricityMeterContext);

  return (
    <JElectricityMeterContext.Consumer>
      { meter => 
        
        <div style={{display: 'inline-flex'}}>
          <div>{meter.flats[2].bill}</div>

          <Meter></Meter>

          <SimpleButton 
            handleClickFunction = {() => { toggleTV(PrevTVstate => PrevTVstate === 'off' ? 'on' : 'off') }} 
            name = {TVstate === 'on' 
            ? 'off'
            : 'on'}
            styles = {{marginTop: '100px'}}
          />
       
          <TV state={TVstate} />

     
        </div>
      
      }
    </JElectricityMeterContext.Consumer>
  );
  }
  
  export default Left;
  