import React from "react";

class Window extends React.Component {
   
    state = {
        night: this.props.night
    };
   
    componentDidUpdate(prevProps) {
        if (prevProps.night !== this.props.night) {
            this.setState({night: this.props.night});
        }
    }

    render() { 
            
        return (
            <div style={{ 
                width: "80%",
                backgroundColor: this.state.night == 1 ? 'blueviolet' : 'lightblue', 
                border: "2px solid white",
                marginTop: "20%", 
                marginLeft: "10%"
            }}>
                  
                <div style={{ 
                     border: "2px solid white",
                     height: "60px"
                }}></div>

                <div style={{ 
                    border: "2px solid white",
                    height: "60px"
                }}></div>
            </div>
        )
    }
}

export default Window;