import React from "react";

class Tv extends React.Component {
    constructor(props) {
        super(props);
        this.state = { on: false };
    }

    render() {
        return (
            <span style={{ width: '70px', height: '50px' }}>
                <span style={{ padding: '10px', width: '50px', height: '30px', backgroundColor: this.state.on ? 'white' : 'black'}}>Tv</span>
            </span>
        );
    }
}  
 
export default Tv;
