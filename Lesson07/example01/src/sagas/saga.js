import { call, put, takeLatest, delay } from 'redux-saga/effects';

function* fetchData(action) {
    try {
        const data = yield call(() => {fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())}, action.payload.id);
        yield delay(2000);
        yield put({ type: 'DATA_LOADED', data: data });
    } catch (e) {
        yield put({ type: 'LOAD_DATA_FAILED', message: e.message });
    }
}
function* mySaga() {
    yield takeLatest("SAGA_FETCH_REQUESTED", fetchData);
}
export default mySaga;
