import React from 'react';
import eventBus from './EventBus';

class TvRemote extends React.Component {
    state = { isTvOn: false };

    turnTvOnOrOff() {
        const nextIsTvOn = !this.state.isTvOn;
        this.setState({ isTvOn: nextIsTvOn });
        eventBus.dispatch('switchTvState', { isTvOn: nextIsTvOn });
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

export default TvRemote;
