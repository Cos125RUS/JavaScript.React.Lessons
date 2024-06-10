import './App.css';
import ParentCounter from "./components/Parent";
import InputForm from "./components/Form";
import Nav from "./components/Menu";
import HoverRating from "./components/Rating";
import BasicList from "./components/BasicList";
import Student from "./components/Student";

function App() {
    return (
        <div className="App">
            {/*<Nav/>*/}
            {/*<ParentCounter/>*/}
            {/*<InputForm/>*/}
            {/*<HoverRating/>*/}
            {/*<BasicList/>*/}
            <Student name={'Vasia'} age={21} isStudent={true}/>
        </div>
    );
}

export default App;
