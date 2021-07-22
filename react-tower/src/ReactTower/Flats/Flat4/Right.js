
import { useState } from "react";
import {actionCreator} from '../../Counter/action';
import { connect } from "react-redux";
import Remote from "./components/Remote";
import LiftButton from "./components/LiftButton";

function Right({addFloor4, tvOnFourthFloorIsOn, toggleTVOnFourthFloor}) {
    const [intervalId, setIntervalId] = useState(null);

    const toggleTV = () => {
      toggleTVOnFourthFloor();

      if (!tvOnFourthFloorIsOn && !intervalId) {
        setIntervalId(setInterval(() => addFloor4(0.5), 1000));
      } else if (tvOnFourthFloorIsOn) {
        clearInterval(intervalId)
        setIntervalId(null);
      }
    }

    return (
      <div><Remote onClick={toggleTV} /><LiftButton label="↕"/></div>
    );
  }

const myConnect = connect(null, actionCreator);

export default myConnect(Right);
