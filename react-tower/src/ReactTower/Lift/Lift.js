import Floor6LiftButton from "../Flats/Flat6/components/Floor6LiftButton";

function Lift({lift}) {
    return (
      <div class="container" style={{top: lift}}>
        <div class="left">
            <Floor6LiftButton text={ "6" } />
        </div>
        <div class="right" />
        <div class="top" />
      </div>
    );
  }

  export default Lift;