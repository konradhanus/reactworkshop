import React from "react";

function TV ({isOn}) {
    return <div style={{ background: isOn ? "url(https://media4.giphy.com/media/xTiIzxW4TmEKgVZf2w/giphy.gif) center/cover" : "black", border: "2px solid silver", width: "120px", height: "75px", margin: "10px auto"}}></div>
}

export default TV;