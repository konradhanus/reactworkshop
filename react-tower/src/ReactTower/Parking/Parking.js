import Car from '../Car';
import { connect } from "react-redux";

function Parking(props) {
    return (
    <>
      <div class="road" >
        <div class="line" />
      </div>
       <div class="road2">
            <div class="line2" />
       </div>
       <div class="parking" >
        <div class="parkingPlace1" ><Car id='1' isVisible={false}/></div>
        <div class="parkingPlace2" ><Car id='2' isVisible={false}/></div>
        <div class="parkingPlace3" ><Car id='3' isVisible={false}/></div>
        <div class="parkingPlace4" ><Car id='4' isVisible={false}/></div>
        <div class="parkingPlace5" ><Car id='5' isVisible={false}/></div>
        <div class="parkingPlace6" ><Car id='6' isVisible={props.isVisibleCar6}/></div>
        <div class="parkingPlace7" ><Car id='7' isVisible={true}/></div>
        <div class="parkingPlace8" ><Car id='8' isVisible={false}/></div>
      </div>
    </>
    );
  }

  const mapStateToProps = (state) => {
    return ({
        isVisibleCar6: state.car[6].showCar
    })
}

export default connect(mapStateToProps)(Parking);