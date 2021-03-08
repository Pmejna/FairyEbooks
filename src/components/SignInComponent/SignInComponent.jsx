import React from 'react';
import styled from 'styled-components';

const SignInComponentWrapper = styled.div`

`;

class SignInComponent extends React.PureComponent {
    state = {
        email: '',
        password: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value});
        console.log(value);

    }

    render() {
        return (
            <SignInComponentWrapper>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input name='email' type='email' value={this.state.email} required onChange={this.handleChange}/>
                    <label>Email</label>
                    <input name='password' type='password' value={this.state.password} required onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type="submit"value='Submit form'/>
                </form>
            </SignInComponentWrapper>
        )
    }
};

export default SignInComponent