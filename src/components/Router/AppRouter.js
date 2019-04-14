import React, {Fragment} from 'react';
import {Router, Route, Switch} from "react-router";
// import {createBrowserHistory} from 'history';
import {SocialCard} from "../Card/SocialCard";
import {Board} from "../Weather/Dashboard";
import {Reddit} from "../Fetch(Axios)/Posts";
import {Seasons} from "../SeasonsPictures/Seasons";

// export const history = createBrowserHistory();

const AppRouter = () => (
    <Fragment>
        {/*<Router history={history}>*/}
        {/*<Switch>*/}
        <Route exact={true} path='/card' component={SocialCard}/>
        <Route exact={true} path='/weather' component={Board}/>
        <Route exact={true} path='/reddit' component={Reddit}/>
        <Route exact={true} path='/seasons' component={Seasons}/>
        {/*</Switch>*/}
        {/*</ Router>*/}
    </Fragment>
);

export default AppRouter
