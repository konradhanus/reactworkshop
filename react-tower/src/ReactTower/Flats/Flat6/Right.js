import Floor6LiftButton from "./components/Floor6LiftButton";
import Floor6CarButton from "./components/Floor6CarButton";

function Right() {
  return (
    <div>
      <Floor6LiftButton text={ "LIFT" } />
      <Floor6CarButton />
    </div>
  );
}

export default Right;