import React, {Fragment} from 'react'

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        error: true
    };

    //or handleChange = (e, { name, value } = e.currentTarget) => {
    handleChange = (event) => {
        const {name, value} = event.currentTarget;
        this.setState({[name]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {password, username} = this.state;

        if (username === 'anton' && password === '12345') {
            localStorage.setItem('user', JSON.stringify(this.state));
            return this.setState({error: false},
                () => {
                this.props.history.push('/profile')
            });
        }
    };

    render() {
        const {error} = this.state;
        return (
            <Fragment>
                {
                    error && <p>Enter correct data (username anton && password 12345)</p>
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
                    </form>
                </div>
            </Fragment>
        )
    }
}

export {Login}
