import React, { useState } from 'react';
import SimpleButton from "./mainComponents/SimpleButton";
import Flat2LiftButton from "./mainComponents/Flat2LiftButton";
import TV from "./mainComponents/Tv";
import Meter from "./mainComponents/Meter";


function Left() {

  const [TVstate, toggleTV] = useState('off');

  return (
    <div style={{display: 'inline-flex'}}>
      <Flat2LiftButton  styles = {{marginTop: '100px'}} />
      <SimpleButton 
        handleClickFunction = {() => { toggleTV(PrevTVstate => PrevTVstate === 'off' ? 'on' : 'off') }} 
        name = {TVstate === 'on' ? 'off' : 'on'}
        buttonStatus = {TVstate}
        styles = {{marginTop: '100px'}}
      />
      <TV state={TVstate} />
    </div>
  );
  }
  
  export default Left;
  