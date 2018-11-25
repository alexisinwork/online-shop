/**
 * Blog Reducer
 */
import initialState from './../../store/initialState';
import { INITIALIZE, LOADING, DATA } from './actions';

export default function appReducer(
    state = initialState.app,
    { type, payload }
) {
    switch (type) {
        case INITIALIZE: {
            return {
                ...state,
                isInitialized: payload.isInitialized
            };
        }
        case LOADING: {
            return {
                ...state,
                isLoaded: payload.isLoaded
            }
        }
        case DATA: {
            return {
                ...state,
                data: payload.data
            }
        }
        default:
            return state;
    }
}
