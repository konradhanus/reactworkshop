import React from "react";

export const AntenaContext = React.createContext('antena');

class Antena extends React.Component {

    render() {
        return (
            <AntenaContext.Provider value="https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif">
                {this.props.children}
            </AntenaContext.Provider>
        )
    }
}

export default Antena;