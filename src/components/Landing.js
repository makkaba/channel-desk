import React, { Component } from 'react';
import Navbar from './Navbar';
import LoginForm from './LoginForm';
import DashBoard from '../containers/DashBoard';

class Landing extends Component{
    render(){
        return(
            <div>
                <Navbar />
                랜딩 페이지
            </div>
        );
    }
}
export default Landing;