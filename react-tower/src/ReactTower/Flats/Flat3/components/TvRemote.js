import React from 'react';
import eventBus from './EventBus';
import { connect } from "react-redux";
import {actionCreator} from './../../../Counter/action';

class TvRemote extends React.Component {
    state = { isTvOn: false };
    eatEnergy;

    turnTvOnOrOff() {
        const nextIsTvOn = !this.state.isTvOn;
        this.setState({ isTvOn: nextIsTvOn });
        eventBus.dispatch('switchTvState', { isTvOn: nextIsTvOn });

        if (nextIsTvOn) {
            this.eatEnergy = setInterval(
                () => this.props.addFloor3(),
                1000
            );
        } else {
            clearTimeout(this.eatEnergy);
        }
    }

    render() {
        const buttonColour = this.state.isTvOn ? 'green' : 'red';
        return (
            <div style={{
                height: '20px',
                width: '20px',
                padding: '5px',
                margin: '4px 4px 0 auto',
                backgroundColor: 'white',
            }}>
                <div
                    onClick={this.turnTvOnOrOff.bind(this)}
                    style={{ height: '20px', width: '20px', backgroundColor: buttonColour, borderRadius: '10px' }}
                />
            </div>
        );
    }
}

export default connect(null, actionCreator)(TvRemote);
