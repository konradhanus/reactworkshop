import React, { useState } from 'react';
import SimpleButton from "./mainComponents/SimpleButton";
import TV from "./mainComponents/Tv";
import Meter from "./mainComponents/Meter";

function Left() {

  const [TVstate, toggleTV] = useState('off');

  return (
      <div style={{display: 'inline-flex'}}>
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
  );
  }
  
  export default Left;
  