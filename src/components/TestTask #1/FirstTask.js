import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Router, Route, Switch, Redirect} from "react-router";
// import {createBrowserHistory} from 'history';
import {Home} from "./Home";
import {Login} from "./Login";
import {News} from "./News";
import {Profile} from "./Profile";

// export const history = createBrowserHistory();

class FirstTask extends Component {
    state = {
      user: null
    };

    componentDidMount() {
        const isAuth = (localStorage.getItem('user'));
        this.setState({
            user: isAuth
        })
    };

    checkAuth = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div className='wrapp'>
                <header className='task-header'>
                    <nav className="top-menu">
                        <ul>
                            <li>
                                <NavLink to='/home'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/news'>News</NavLink>
                            </li>
                            <li>
                                <NavLink to='/profile' onClick={this.checkAuth}>Profile</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className='views-section'>
                    {/*<Router history={history}>*/}
                    <Switch>
                        <Route exact={true} path='/home' component={Home}/>
                        <Route exact={true} path='/login' component={Login}/>
                        <Route exact={true} path='/news' component={News}/>
                        <Route exact={true} path='/profile' component={Profile}/>
                    </Switch>
                    {/*</Router>*/}
                </section>
            </div>
        )
    }
}

export {FirstTask}
