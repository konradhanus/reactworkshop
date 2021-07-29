import {actionCreator} from './action';
import { connect } from "react-redux";

function Left(props) {
    return (
     <div style={
       {
         color: 'white', 
         display: 'flex',  
         alignItems: 'center',
         justifyContent: 'center',
         alignContent: 'center', 
         height: '100%', 
      }}><button onClick={()=>props.callTheCar()}>Call the car</button></div>
    );
  }
  
  export default connect(null, actionCreator)(Left);
  