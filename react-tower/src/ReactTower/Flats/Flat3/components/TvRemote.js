import React from "react";

class TvRemote extends React.Component {
    constructor(props) {
        super(props);
        this.state = { on: false };
    }

    turnTvOnOrOff = function () {

    }

    render() {
        return (
            <span style={{ width: '5px', height: '5px' }} onClick={this.turnTvOnOrOff}>Tv Remote</span>
        );
    }
}  
 
export default TvRemote;
