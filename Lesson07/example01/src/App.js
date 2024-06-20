import logo from './logo.svg';
import './App.css';
import View from "./components/View";
import MyButton from "./components/Ex2Button";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import FetchButton from "./components/FetchButton";
import ThunkComponent from "./components/ThunkComponent";
import SagaButton from "./components/SagaButton";
import ViewFromData from "./components/ViewFromData";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'TEST_ACTION'});
    }, [dispatch]);

    return (
        <div className="App">
            <View/>
            <MyButton/>
            <FetchButton/>
            <ThunkComponent/>
            <SagaButton/>
            <ViewFromData/>
        </div>
    );
}

export default App;
