import React from 'react';
import styled from 'styled-components';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

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
                    <FormInput name='email' type='email' value={this.state.email} required={true} handleChange={this.handleChange} label='Email'/>
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange}/>
                    <Button type="submit">Sign in</Button>
                </form>
            </SignInComponentWrapper>
        )
    }
};

export default SignInComponent