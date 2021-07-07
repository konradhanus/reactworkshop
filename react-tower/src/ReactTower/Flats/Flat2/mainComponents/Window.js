import React from "react";
import { AntenaContext } from "../../../Antena";

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
            <AntenaContext.Consumer>

            { sygnal => (
                <div style={{ 
                    width: "80%",
                    background: this.state.night == 1 ? `url(${sygnal}) center/cover` : 'lightblue', 
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
            )}
            </AntenaContext.Consumer>
        )
    }
}

export default Window;