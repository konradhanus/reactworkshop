import Telewizor from './Telewizor';
import { AntenaContext } from "../../../../Antena";

import React from "react";

function TelewizorConsumer (props) {
    return (
        <AntenaContext.Consumer>
            {signal =>
               <Telewizor {...props} signal={signal}/>
            }
        </AntenaContext.Consumer>
    );
}

export default TelewizorConsumer;