import React from 'react';

import { JElectricityMeterContext }  from "../../../JElectricityMeter";

class Meter extends React.Component {
    
    render() {
        return (
            <JElectricityMeterContext.Consumer>
            { meter => 
                <div style={{
                    height: '14px',
                    width: '28px',
                    padding: '2px',
                    marginTop: '100px',
                    backgroundColor: 'white'
                }}>
                {meter.flats[2].bill}     
                </div>
            }
          </JElectricityMeterContext.Consumer>
        );
    }
}

export default Meter;