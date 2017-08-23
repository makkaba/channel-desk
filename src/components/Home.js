import React, { Component } from 'react';
import Navbar from './Navbar';
import LoginForm from './LoginForm';

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div>home!!</div>
            </div>
        );
    }
}
export default Home;