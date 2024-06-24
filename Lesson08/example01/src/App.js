import logo from './logo.svg';
import './App.css';
import GistList from "./components/GistList";
import PublicGists from "./components/PublicGists";

function App() {
    return (
        <div className="App">
            <GistList/>
            <PublicGists/>
        </div>
    );
}

export default App;
