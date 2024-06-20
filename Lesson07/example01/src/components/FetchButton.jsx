import {useDispatch} from "react-redux";

const FetchButton = () => {
    const dispatch = useDispatch();

    const handleFetch = () => {
        dispatch({type: 'FETCH_DATA_REQUEST'});
    };

    return <button onClick={handleFetch}>Fetch</button>;
};

export default FetchButton;