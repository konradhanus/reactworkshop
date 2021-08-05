
import Flat2LiftButton from "../Flats/Flat2/mainComponents/Flat2LiftButton";
import Floor4LiftButton from "../Flats/Flat4/components/LiftButton";
import Floor6LiftButton from "../Flats/Flat6/components/Floor6LiftButton";

function Lift({lift}) {
    return (
      <div class="container" style={{top: lift}}>
        <div class="left">
            <div style={{display: "inline-flex"}}>
              <Flat2LiftButton styles = {{transform: "rotate(270deg)"}} name={'2'}/>
              <Floor6LiftButton text={ "6" } />
              <Floor4LiftButton />
            </div>
        </div>
        <div class="right" />
        <div class="top" />
      </div>
    );
  }

  export default Lift;