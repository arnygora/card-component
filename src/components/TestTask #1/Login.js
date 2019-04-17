import React, {Fragment} from 'react'

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = (event) => {
        const {name, value} = event.currentTarget;
        this.setState({[name]: value});
        console.log(this.state)

    };

    render() {
        return (
            <Fragment>
                <h2>Profile</h2>
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
