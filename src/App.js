import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './containers/home/Home';
import About from './containers/about/About';
import Login from './containers/login/Login';
import theme from './theme/default';

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </ThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
