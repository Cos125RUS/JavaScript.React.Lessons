import {call, put, takeLatest, delay} from 'redux-saga/effects';

function* fetchData(action) {
    try {
        let data = null;
        yield call(() => {
            new Promise((resolve) =>
                setTimeout(() => resolve("Data Loaded"), 1000))
                .then(res => data = res);
        }, action.payload.id);
        yield delay(500);
        yield put({type: 'DATA_LOADED', payload: data});
    } catch (e) {
        yield put({type: 'LOAD_DATA_FAILED', message: e.message});
    }
}

function* mySaga() {
    yield takeLatest("SAGA_FETCH_REQUESTED", fetchData);
}

export default mySaga;
