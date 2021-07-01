import { AntenaContext } from "../../Antena";

function Floor() {
  return (
    <AntenaContext.Consumer>
      {text => <p>{text}</p>}
    </AntenaContext.Consumer>
   );
}

export default Floor;
