import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';

class Login extends Component{
    render(){
        return (
            <div>
                <Navbar />
                <LoginForm />
            </div>
        );
    }
}

export default Login;