import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const count = useSelector(state => state);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    }

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>up</button>
            <button onClick={decrement}>down</button>
        </div>
    );
}

export default Counter;