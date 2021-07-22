import React, { useState } from 'react';
import SimpleButton from "./mainComponents/SimpleButton";
import TV from "./mainComponents/Tv";


function Left() {

  const [TVstate, toggleTV] = useState('off');

  return (
    <div style={{display: 'inline-flex'}}>
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
  