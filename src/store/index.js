import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import ApiService from '../services/api/ApiService';
const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState, history) {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware, routerMiddleware(history))
        )
    );

    const services = {
        apiService: new ApiService()
    };

    sagaMiddleware.run(rootSaga, services);

    return store;
}
