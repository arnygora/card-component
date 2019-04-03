import React from 'react'
import {Router, Route, Switch, NavLink} from "react-router-dom";
import {createBrowserHistory} from "history";
import {SocialCard} from "../Card/SocialCard";
import {Board as WeatherDashboard} from "../Weather/Dashboard";

const history = createBrowserHistory();

const RouterApp = () => (
    <Router history={history}>
        <aside className='navy'>
            <nav className='navy-block'>
                <li className='navy-block__item'>
                    <NavLink to='/card'>Card component</NavLink>
                    <NavLink to='/weather'>Weater component</NavLink>
                </li>
            </nav>
        </aside>
        {/*<Switch>*/}
            <Route exact path='/card' component={SocialCard}/>
            <Route exact path='/weather' component={WeatherDashboard}/>
        {/*</Switch>*/}
    </Router>
);

export {RouterApp}
