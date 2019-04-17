import React from 'react';
import {Route, Switch} from "react-router";
import {Home} from "./Home";
import {News} from "./News";
import {Profile} from "./Profile";
import {Login} from "./Login";

export const RouterComponent = () => (
    <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/news' component={News}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
);
