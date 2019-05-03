import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router';
// import {createBrowserHistory} from 'history';
import { SocialCard } from '../Card/SocialCard';
import { Board } from '../Weather/Dashboard';
import { Reddit } from '../Fetch(Axios)/Posts';
import { Seasons } from '../SeasonsPictures/Seasons';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import FirstTask from '../TestTask #1/FirstTask'
import { Bitcoin } from '../bitcoinApi/Bitcoin'

// export const history = createBrowserHistory();

const AppRouter = () => (
    <Fragment>
        {/*<Router history={history}>*/}
        <Switch>
            <Route exact={true} path='/card' component={SocialCard}/>
            <Route exact={true} path='/weather' component={Board}/>
            <Route exact={true} path='/reddit' component={Reddit}/>
            <Route exact={true} path='/seasons' component={Seasons}/>
            <Route exact={true} path='/modal' component={ModalWindow}/>
            <Route exact={true} path='/bitcoin' component={Bitcoin}/>
            <Route exact={true} path='/:page' component={FirstTask}/>
        </Switch>
        {/*</ Router>*/}
    </Fragment>
);

export default AppRouter
