import {combineReducers} from "@reduxjs/toolkit";
import dataReducer from "./dataReducer";

const initialState = {
    data: []
};

const rootReducer = combineReducers({
    root: (state = initialState, action) => state,
    data: dataReducer
})

export default rootReducer;