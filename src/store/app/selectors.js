const cutState = state => state.app;

export const getIsInitialized = state => cutState(state).isInitialized;
export const getIsLoaded = state => cutState(state).isLoaded;
export const getData = state => cutState(state).data;
