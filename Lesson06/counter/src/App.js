import './App.css';
import {Provider} from "react-redux";
import CountComponent from "./components/CountComponent";
import store from "./store";
import ButtonComponentPlus from "./components/ButtonComponentPlus";
import ButtonComponentMinus from "./components/ButtonComponentMinus";

function App() {
    return (
        <Provider store={store}>
            <div>
                <CountComponent/>
                <ButtonComponentPlus/>
                <ButtonComponentMinus/>
            </div>
        </Provider>
    );
}

export default App;
