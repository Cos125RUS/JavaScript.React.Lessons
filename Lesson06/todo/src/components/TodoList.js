import {useDispatch, useSelector} from "react-redux";
import {useContext} from "react";
import withFilter from "../hoc/withFilter";
import {FilterContext} from "../contexts/FilterContext";
import {toggleTodo} from "../actions/todoActions";

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const {filter} = useContext(FilterContext);

    const filterTodos = withFilter(todos, filter);

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    }

    return (
        <ul>
            {filterTodos.map(todo => (
                <li
                    key={todo.id}
                    onClick={() => handleToggleTodo(todo.id)}
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;