import './App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import FilterProvider from "./components/FilterProvider";

function App() {
    return (
        <FilterProvider>
            <h1>TodoList</h1>
            <AddTodo/>
            <TodoFilter/>
            <TodoList/>
        </FilterProvider>
    );
}

export default App;
