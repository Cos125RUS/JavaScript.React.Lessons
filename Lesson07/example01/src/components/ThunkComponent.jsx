import {useDispatch} from "react-redux";
import {fetchUserData} from "../actions/actions";

const ThunkComponent = () => {
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(fetchUserData());
    }

    return <button onClick={handleButtonClick}>Load user data</button>;
}

export default ThunkComponent;