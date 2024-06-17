import {decrement} from "../reducers/counterSlice";
import {connect} from "react-redux";

const ButtonComponentMinus = (props) => {
    return <button onClick={props.decrement}>-</button>
}

const mapDispatchToProps = {
    decrement
};

export default connect(null, mapDispatchToProps)(ButtonComponentMinus);
