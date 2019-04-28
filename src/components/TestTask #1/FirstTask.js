import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { RouterComponent } from "./RouterComponent";
import user from "../../reducers/user";

class FirstTask extends Component {
    state = {
        isAuth: null
    };

    async componentDidMount() {
        const data = JSON.parse(localStorage.getItem('user'));
        await this.setState({isAuth: data});
        console.log(' logged in => ' + Boolean(this.state.isAuth));
    };

    checkAuth = (e) => {
        e.preventDefault();
        Boolean(this.state.isAuth) ? this.props.history.push('/profile') : this.props.history.push('/login');
    };

    static propTypes = {
      user: PropTypes.object.isRequired
    };

    render() {
        const { user, page} = this.props;
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
                    <span>Привітулі {user.name} {user.surname}</span>
                </header>
                <section className='views-section'>
                    <RouterComponent/>
                </section>
            </div>
        )
    }
}

const mapStateToProps = store => {
    console.log(store);
    return {
        user: store.user,
        page: store.page
    }
};

export default connect(mapStateToProps)(FirstTask)
