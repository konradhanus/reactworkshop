import Floor4LiftButton from "../Flats/Flat4/components/LiftButton";
import Floor6LiftButton from "../Flats/Flat6/components/Floor6LiftButton";

function Lift({lift}) {
    return (
      <div class="container" style={{top: lift}}>
        <div class="left">
            <div style={{display: "inline-flex"}}>
              <Floor4LiftButton />
              <Floor6LiftButton text={ "6" } />
            </div>
        </div>
        <div class="right" />
        <div class="top" />
      </div>
    );
  }

  export default Lift;