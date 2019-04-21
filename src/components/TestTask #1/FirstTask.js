import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {RouterComponent} from "./RouterComponent";
// import {createBrowserHistory} from 'history';

// export const history = createBrowserHistory();

class FirstTask extends Component {
    state = {
        isAuth: null
    };

    async componentDidMount() {
        const data = JSON.parse(localStorage.getItem('user'));
        await this.setState({isAuth: data});
        console.log(Boolean(this.state.isAuth));
    };

    checkAuth = (e) => {
        e.preventDefault();
        Boolean(this.state.isAuth) ? this.props.history.push('/profile') : this.props.history.push('/login') ;
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
