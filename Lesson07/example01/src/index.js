import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import buttonReducer from "./reducers/buttonReducer";
import asyncMiddleware from "./middlewares/asyncMiddleware";
import createSagaMiddleware from "redux-saga";
import {thunk} from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import {persistReducer, persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import mySaga from "./sagas/saga";
import storage from 'redux-persist/lib/storage';

const middleware = store => next => action => {
    console.log("Side effect");

    setTimeout(() => console.log("timeout callback"), 1000);

    return next(action);
};

const loggerMiddleware = store => next => action => {
    console.log("Dispatch", action);
    return next(action);
};

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: {
        button: buttonReducer,
        persist: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: ['persist/PERSIST']
        }
    }).concat(
        middleware, loggerMiddleware, asyncMiddleware, thunk, sagaMiddleware)
});

sagaMiddleware.run(mySaga);

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
