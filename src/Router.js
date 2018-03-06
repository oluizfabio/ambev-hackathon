import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Goals from './components/Goals'

import App from './App';

class Router extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ App } />
                    <Route exact path='/goals' component={ Goals } />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Router;
