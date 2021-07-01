import React from 'react';

class Remote extends React.Component {
    constructor(props) {
        super(props);
        this.stringGetter = this.stringGetter.bind(this);
    }

    state = {
        state: this.props.state
    };

    componentDidUpdate(prevProps) {
        if(this.props.state !== prevProps.state) {
            this.setState({state: this.props.state});
        }
    }

    stringGetter() {
        return this.state.state ? 'green' : 'red'
    }

    click() {
            this.props.action(true);
    }

    render() {
        return (
            <button
                style={{
                    width: '30px',
                    height: '20px',
                    backgroundColor: this.stringGetter(),
                    borderRadius: '20px'
                }}

                onClick={() => this.click()}
            />
        )
    }
}

export default Remote;