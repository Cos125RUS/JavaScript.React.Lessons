import {increment} from "../reducers/counterSlice";
import {connect} from "react-redux";

const ButtonComponentPlus = (props) => {
    return <button onClick={props.increment}>+</button>
}

const mapDispatchToProps = {
    increment
};

export default connect(null, mapDispatchToProps)(ButtonComponentPlus);
