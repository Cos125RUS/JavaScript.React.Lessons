import {useDispatch} from "react-redux";

const SagaButton = () => {
    const dispatch = useDispatch();
    const id = 1;

    const handleSaga = () => {
        dispatch({type: 'SAGA_FETCH_REQUESTED', payload: {id}})
    }

    return <button onClick={handleSaga}>Use Saga</button>
};

export default SagaButton;