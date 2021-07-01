import React, { useState } from 'react';
import Telewizor from './components/Telewizor';
import Remote from './components/Remote';

function childHandler () {
    console.log("AAA");
}

function Left() {

    const [isTurnedOn, onClickAction] = useState(false);

    return (
       <React.Fragment>
            <Telewizor state={isTurnedOn}  />
            <Remote state={isTurnedOn} action={childHandler()} />
            <button
                style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: isTurnedOn ? 'green' : 'red',
                    borderRadius: '20px'
                }}

                onClick = {() => { onClickAction(x => !x ) }}
            />
       </React.Fragment>
    );
  }
  
  export default Left;
