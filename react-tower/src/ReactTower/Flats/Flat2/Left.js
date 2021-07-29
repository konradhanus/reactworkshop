import React, { useState } from 'react';
import SimpleButton from "./mainComponents/SimpleButton";
import Flat2LiftButton from "./mainComponents/Flat2LiftButton";
import Flat2CarButton from "./mainComponents/Flat2CarButton";
import TV from "./mainComponents/Tv";
import Meter from "./mainComponents/Meter";


function Left() {

  const [TVstate, toggleTV] = useState('off');

  return (
    <div style={{display: 'inline-flex'}}>
      <Flat2LiftButton  styles = {{marginTop: '100px'}} name = {'2'}></Flat2LiftButton>
      <Flat2CarButton  styles = {{marginTop: '100px'}} name = {'Park me'}></Flat2CarButton>
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
  