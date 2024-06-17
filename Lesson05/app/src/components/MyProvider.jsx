import {Provider} from "react-redux";
import Counter from "./Counter";
import {store} from "../modules/store";

export default function MyProvider() {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
}