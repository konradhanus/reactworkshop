import React from "react";

class Remote extends React.Component {
    render() {
        return <button onClick={() => alert("włączam tv")}>Pilot</button>
    }
}

export default Remote;