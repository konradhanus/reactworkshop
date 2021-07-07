import React from "react";
import imageTVOff from '../images/TV.png';
import imageTVOn from '../images/TV1.png';

class TV extends React.Component {

    constructor(props) {
        super(props);
        this.getSrc = this.getSrc.bind(this);
    }
    
    state = {
        state: this.props.state
    };    

    getSrc() {
        console.log(this.state.state);
        return this.state.state == 'on' ? imageTVOn : imageTVOff 
    } 

    componentDidUpdate(prevProps) {
        if (prevProps.state !== this.props.state) {
            this.setState({state: this.props.state});
        }
    }

    render() {
        return (
            <div>
            <img 
                style={{height: "130px"}}
                src={this.getSrc()} />
            </div>)
    }
}

export default TV;