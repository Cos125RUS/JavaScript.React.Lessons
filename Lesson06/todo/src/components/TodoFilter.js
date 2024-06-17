import {useContext} from "react";
import {FilterContext} from "../contexts/FilterContext";

const TodoFilter = () => {
    const {filter, setFilter} = useContext(FilterContext);

    const handleChange = (e) => {
        setFilter(e.target.value);
    }

    return (
        <select value={filter} onChange={handleChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
        </select>
    );
};

export default TodoFilter;