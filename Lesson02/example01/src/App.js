import './App.css';
import Counter from "./components/Counter";
import Show from "./components/Visible";
import Timer from "./components/Timer";
import RefExample from "./components/RefExample";
import List from "./components/List";

function App() {
    return (
        <div className="App">
            <Timer />
            <Counter/>
            <Show data="New text from component"/>
            <RefExample />
            <List />
        </div>
    );
}

export default App;
