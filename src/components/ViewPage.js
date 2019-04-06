import React, {Fragment} from 'react'
import {Navy} from "./Router/Navigation";
import {Route, Router, Switch} from "react-router";
import {SocialCard} from "./Card/SocialCard";
import {Board} from "./Weather/Dashboard";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

export const ViewPage = () => (
    <Fragment>
        <Navy/>
        <Router history={history}>
            <Switch>
                <Route exact path='/card' component={SocialCard}/>
                <Route exact path='/weather' component={Board}/>
            </Switch>
        </ Router>
    </Fragment>
);
