import React from 'react';
import { createContext } from "react";

export const JElectricityMeterContext = createContext();

{
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
}