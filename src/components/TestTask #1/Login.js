import React, {Fragment} from 'react'
import { Redirect} from "react-router";


class Login extends React.Component {
    state = {
        username: '',
        password: '',
        error: false
    };

    //or handleChange = (e, { name, value } = e.currentTarget) => {
    handleChange = (event) => {
        const {name, value} = event.currentTarget;
        this.setState({[name]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {password, username} = this.state;

        localStorage.setItem('user', JSON.stringify(this.state));
        if (!(username === 'anton' && password === '12345')) {
            return this.setState({error: false}, () => {
                this.props.history.push('/login')
            });
        }
    };

    render() {
        const {error} = this.state;
        return (
            <Fragment>
                {
                    error && <p>Enter correct data</p>
                }
                <div id='login'>
                    <form id='login-form'
                          onSubmit={this.handleSubmit}
                    >
                        <label>Login</label>
                        <input required type='text' name='username'
                               placeholder='username'
                               onChange={this.handleChange}
                        />
                        <label>Password</label>
                        <input required type='password' name='password'
                               placeholder='password'
                               onChange={this.handleChange}
                        />
                        <button type="submit">Sign In</button>
                        <div className='error-message'
                            // hidden={!error}
                        >
                            {/*{error}*/}
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export {Login}
