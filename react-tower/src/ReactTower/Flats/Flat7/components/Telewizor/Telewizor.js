import React from 'react';

class Telewizor extends React.Component {
    constructor(props) {
        super(props);
        this.getStream = this.getStream.bind(this);
    }

    state = {
        state: this.props.state
    };

    componentDidUpdate(prevProps) {
        if(this.props.state !== prevProps.state) {
            this.setState({state: this.props.state});
        }
    }

    getStream() {
        return this.state.state
            ? 'url("'+this.props.signal+'")'
            : 'url("https://upload.wikimedia.org/wikipedia/commons/3/39/BLACK.PNG")'
    }

    render() {
        return (
            <div
                style={{
                    width:'110px',
                    height:'62px',
                    backgroundImage: this.getStream(),
                    backgroundSize: '110px 62px',
                    margin:'10px auto',
                    border: '2px gray solid',
                }}
            />
        )
    }
}

export default Telewizor;

{/* <AntenaContext.Consumer>
{text => <button>{text}</button>}
</AntenaContext.Consumer> */}