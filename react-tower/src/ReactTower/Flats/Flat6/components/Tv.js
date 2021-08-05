import React, {Fragment} from 'react';
import Remote from "./Remote";
import { AntenaContext } from '../../../Antena';
import { actionCreator } from '../../../Counter/action';
import { connect } from "react-redux";

class Tv extends React.Component {

    channelCount = 10;

    constructor(props) {
        super(props);
        this.state = {isOn: false, channel: 0, color: "black"};
        setInterval(this.counter, 1000);
    }

    randomRgba = () => {
        return 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ','
            + Math.round(Math.random() * 255) + ',' + Math.random().toFixed(1) + ')';
    }

    counter = () => {
        if(this.state.isOn) {
            this.props.addFloor6();
        }
    }

    switchChannel = () => {
        const channel = (this.state.channel + 1) % this.channelCount;

        if(0 === channel) {
            this.setState({isOn: false, channel: 0, color: "black"})
        } else {
            this.setState({isOn: true, channel: channel, color: this.randomRgba()})
        }
    }

    render() {
        const displayChannel = 0 === this.state.channel?"":this.state.channel;

        return (
            <Fragment>
                <Remote callback={this.switchChannel}/>
                
                <AntenaContext.Consumer>
                {signal =>
                    <div style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: this.state.color,
                        border: "2px solid white",
                        margin: "10px auto",
                        color: "white",
                        fontSize: "1.6em",
                        fontWeight: "bold",
                        textAlign: "right",
                        padding: "10px"
                    }}>
                    <span style={{float: "right"}}>{displayChannel}</span>
                    <img src={signal} style={{maxWidth: "100%", maxHeight: "100%"}} />
                    
                </div>
                }
                </AntenaContext.Consumer>
            </Fragment>
        )
    }
}

export default connect(null, actionCreator)(Tv);