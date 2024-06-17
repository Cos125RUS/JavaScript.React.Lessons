import {useState} from "react";
import {FilterContext} from "../contexts/FilterContext";
import {Provider} from "react-redux";
import store from "../store/store";

const FilterProvider = ({children}) => {
    const [filter, setFilter] = useState('all');

    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            <Provider store={store}>
                {children}
            </Provider>
        </FilterContext.Provider>
    );
};

export default FilterProvider;