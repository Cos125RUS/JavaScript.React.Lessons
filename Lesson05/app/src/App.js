import './App.css';
import GrandParent from "./components/ContextExample";
import {createContext, useState} from "react";
import {ThemeButton} from "./components/Theme";
import {NoteInput, NotesList} from "./components/Notes";
import StyledComponent from "./components/StyledComponent";
import WrapperCounter from "./components/WrapperCounter";
import MyProvider from "./components/MyProvider";

export const ThemeContext = createContext(null);
export const NotesContext = createContext(null);

function App() {
    const [theme, setTheme] = useState({
        background: 'lightgray',
        color: 'black'
    });
    const [notes, setNotes] = useState(["item 1", "item 2"]);
    const addNote = (note) => {setNotes([...notes, note]);};

    return (
        <NotesContext.Provider value={{notes, addNote}}>
            <ThemeContext.Provider value={theme}>
                <div className="App">
                    <GrandParent/>
                    <ThemeButton/>
                    <button onClick={() => setTheme({
                        background: 'black',
                        color: 'white'
                    })}>change theme
                    </button>
                    <NotesList/>
                    <NoteInput/>
                    <StyledComponent/>
                    <WrapperCounter/>
                </div>
            </ThemeContext.Provider>
            <MyProvider/>
        </NotesContext.Provider>
    );
}

export default App;
