/**
 * Blog Actions
 */
export const INITIALIZE = 'app/initialize';
export const LOADING = 'app/loading';
export const DATA = 'app/data';
export const SAGA_CHECK = 'app/SAGA_CHECK';

export const initialize = isInitialized => ({
    type: INITIALIZE,
    payload: {
        isInitialized
    }
});

export const loading = isLoading => ({
    type: LOADING,
    payload: {
        isLoading
    }
});

export const data = data => ({
    type: DATA,
    payload: {
        data
    }
});

export const sagaCheck = () => ({
    type: SAGA_CHECK
});
