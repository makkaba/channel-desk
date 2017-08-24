import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import Center from '../containers/Center';
import Grid from 'material-ui/Grid';
import loginStyles from '../styles/common/index.css';


class Login extends Component{
  state = {
    redirectToReferrer: false
  }
    render(){
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      const { redirectToReferrer } = this.state
      if(this.props.user.user !== ""){
        return (
          <Redirect to='/' />
          // <Redirect to={from} />
        );
      }
        return (
            <div className="full-screen">
                <Navbar />
                <div className="rest-flex">
                  <div style={{margin:"15% 0"}}>
                    <Center>
                      <h1>로그인</h1>
                      <LoginForm />
                    </Center>
                  </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, null)(Login);