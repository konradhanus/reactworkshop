import React from 'react';
import eventBus from './EventBus';

class Tv extends React.Component {
    state = { isOn: false };

    componentDidMount() {
        eventBus.on('switchTvState', (data) =>
            this.setState({ isOn: data.isTvOn })
        );
    }

    render() {
        return (
            <div style={{
                height: '84px',
                width: '150px',
                padding: '2px',
                margin: '20px auto',
                backgroundColor: 'black',
            }}>
                <div style={{ backgroundColor: 'black' }}>
                    {this.state.isOn && <img
                        alt='tv'
                        src='https://media.tenor.com/images/eea1c4cadc9708ef91374cfac326e1e1/tenor.gif'
                        style={{
                            width: '100%',
                        }}
                    />}
                </div>
            </div>
        );
    }
}

export default Tv;
