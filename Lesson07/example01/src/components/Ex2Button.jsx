import {useDispatch} from "react-redux";

const MyButton = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'BUTTON_CLICKED', payload: 'Hello, World!' });
    };

    return <button onClick={handleClick} >Say Hello!</button>;
}

export default MyButton;