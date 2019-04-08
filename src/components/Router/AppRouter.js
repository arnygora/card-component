import React from 'react';
import {Router, Route, Switch} from "react-router";
import {createBrowserHistory} from 'history';
import {SocialCard} from "../Card/SocialCard";
import {Board} from "../Weather/Dashboard";
import {Reddit} from "../Fetch(Axios)/Posts";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/card' component={SocialCard}/>
            <Route exact={true} path='/weather' component={Board}/>
            <Route exact={true} path='/reddit' component={Reddit}/>
        </Switch>
    </ Router>
);

export default AppRouter
