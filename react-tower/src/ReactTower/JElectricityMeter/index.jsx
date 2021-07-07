import React from "react";

export const JElectricityMeterContext = React.createContext('JElectricityMeter');

class JElectricityMeter extends React.Component {

    state = {
        flats: {
            1: { owner: '1', bill: 0 },
            2: { owner: 'Julia', bill: 0 },
            3: { owner: '3', bill: 0 }
        },
        towerBill: 0
    };


    render() {
        return (
            <JElectricityMeterContext.Provider 
               value = {{
                towerBill: this.state.towerBill,
                flats: this.state.flats,
                getTowerBill: () => {
                    const flats = Object.assign({}, this.state.flats);
                    const towerBill = Object.assign({}, this.state.towerBill);
                    var sumObjectValues = function(items, prop) {
                        return items.reduce( function(a, b) {
                             return a + b[prop];
                        }, 0);
                    };
                    towerBill = sumObjectValues(flats, 'bill');
                    this.setState({
                        towerBill
                    });
                },
                increaseFlatBill: flatID => {
                    const flats = Object.assign({}, this.state.flats);
                    flats[flatID].bill = flats[flatID].bill + 1;
                    this.setState({
                        flats
                    });
                   
                }
               }}
            >
                {this.props.children}
                
            </JElectricityMeterContext.Provider>
        )
    }
}

export default JElectricityMeter;
