import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
// import {Router, Route, Redirect} from "react-router";
import {RouterComponent} from "./RouterComponent";
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

class FirstTask extends Component {
    componentDidMount() {
        const isAuth = (localStorage.getItem('user'));
        // this.setState({
        //     user: isAuth
        // })
    };

    checkAuth = (e) => {
        e.preventDefault();

        this.state.user ? console.log('not logged') : history.push('/login');
    };

    render() {
        return (
            <div className='wrapp'>
                <header className='task-header'>
                    <nav className="top-menu">
                        <ul>
                            <li>
                                <NavLink to='/home' activeClassName="active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/news' activeClassName="active">News</NavLink>
                            </li>
                            <li>
                                <NavLink to='/profile' activeClassName="active"
                                         onClick={this.checkAuth}>Profile</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className='views-section'>
                    <RouterComponent/>
                </section>
            </div>
        )
    }
}

export {FirstTask}
