import React from "react";
import TableSRC from '../images/table.png';

class Table extends React.Component {

        
    render() {
        return (
            <div>
            <img 
                style={this.props.tableStyle}
                src={TableSRC} />
            </div>)
    }
}

export default Table;