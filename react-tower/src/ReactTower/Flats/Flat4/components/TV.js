import React from "react";
import { AntenaContext } from "../../../Antena";

function TV ({isOn}) {
    return (
        <AntenaContext.Consumer>{signal =>
            <div
                style={{
                    background: isOn ? `url(${signal}) center/cover` : "black",
                    border: "2px solid silver",
                    width: "120px",
                    height: "75px",
                    margin: "10px auto"
                }}
            />
        }</AntenaContext.Consumer>
    );
}

export default TV;