import { put, takeEvery } from 'redux-saga/effects';
import { SAGA_CHECK, INITIALIZE } from './actions';

function* fetchFakeData(action, apiService) {
    try {
        // if (action.payload.isInitialized) {
        //     const data = yield apiService.get();
        // }
        yield put({ type: SAGA_CHECK });
    } catch (e) {
        yield put({ type: SAGA_CHECK });
    }
}

function* appSaga({ apiService }) {
    // better 2 separate calls 1 for synch operations - 1 for async if needed
    yield takeEvery(INITIALIZE, fetchFakeData, apiService);
}

export default appSaga;
