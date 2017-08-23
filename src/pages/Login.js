import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import Center from '../container/Center';

class Login extends Component{
    render(){
        return (
            <div style={{height: '100%'}}>
                <Navbar />
                <Center>
                    <LoginForm />
                </Center>
            </div>
        );
    }
}

export default Login;