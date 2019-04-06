import React from 'react';
import {Router, Route, Switch} from "react-router";
import {createBrowserHistory} from 'history';
import {SocialCard} from "../Card/SocialCard";
import {Board} from "../Weather/Dashboard";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path='/card' component={SocialCard}/>
            <Route path='/weather' component={Board}/>
        </Switch>
    </ Router>
);

export default AppRouter
