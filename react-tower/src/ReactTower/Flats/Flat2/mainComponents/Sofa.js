import React from "react";
import SofaSRC from '../images/sofa.png';

class Sofa extends React.Component {

        
    render() {
        return (
            <div>
            <img 
                style={this.props.sofaStyle}
                src={SofaSRC} />
            </div>)
    }
}

export default Sofa;