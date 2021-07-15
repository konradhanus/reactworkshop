import {actionCreator} from './action';
import { connect } from "react-redux";
import Lift from './Lift';

const mapStateToProps = (state) => {
    return ({
        counter: state.counter
    })
}

const myConnect = connect(mapStateToProps, actionCreator);

export default myConnect(Lift);
