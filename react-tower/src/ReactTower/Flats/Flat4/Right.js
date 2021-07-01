
import Remote from "./components/Remote";

function Right({toggleTVOnFourthFloor}) {
    return (
     <div><Remote onClick={toggleTVOnFourthFloor} /></div>
    );
  }
  
  export default Right;
  