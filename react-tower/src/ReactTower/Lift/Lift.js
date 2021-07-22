import Flat2LiftButton from "../Flats/Flat2/mainComponents/Flat2LiftButton";
import Floor6LiftButton from "../Flats/Flat6/components/Floor6LiftButton";

function Lift({lift}) {
    return (
      <div class="container" style={{top: lift}}>
        <div class="left">
            <Flat2LiftButton styles = {{transform: "rotate(270deg)"}} />
            <Floor6LiftButton text={ "6" } />
        </div>
        <div class="right" />
        <div class="top" />
      </div>
    );
  }

  export default Lift;