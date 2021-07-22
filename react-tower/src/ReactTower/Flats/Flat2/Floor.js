import Sofa from "./mainComponents/Sofa";
import Table from "./mainComponents/Table";

function Floor() {
  
  return (
  <div>
    
    <div>Julia</div>

    <Sofa sofaStyle={{height: "50px"}} ></Sofa>
    <Table tableStyle={{height: "100px"}} ></Table>
    
  </div>
  );
}

export default Floor;
