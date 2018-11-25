import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Redux Store
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { ConnectedRouter } from 'react-router-redux';

import { createBrowserHistory } from 'history';

import App from './containers/app/App';
import initialState from './store/initialState';

const history = createBrowserHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
