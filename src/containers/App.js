import React, { Component } from 'react';

import reset from '../styles/common/reset.css';

import app from '../config/firebase';
import { login } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import PrivateRoute from '../helpers/PrivateRoute';
import PublicRoute from '../helpers/PublicRoute';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import Login from '../pages/Login';
import Chat from '../pages/Chat';
import DashBoard from './DashBoard';

/*
TODO: 
1. 로그인 정보를 action을 통해서 store로 넘긴다. (o)
2. 저장된 user 정보를 PrivateRoute에서 connect를 사용하여 스마트 컴포넌트로 만든 후 
this.props.user를 조회하여 분기한다.
*/ 


class App extends Component{
    constructor(){
        super();
        this.state  = {
            user: ''
        };
        console.log('constructor');
    }

    componentDidMount(){
        console.log('didmount');

       /* TODO: 
       this.state가 안되는 경우 bind 하는 방법을 찾아서 바꾸자
       */
        var self = this;

        app.auth().onAuthStateChanged(function(user) {
            if (user) {
                //debugger;
                // self.setState({loggedIn: true, user: user});
                /*
                user.photoURL
                user.displayName
                user.
                */
                self.props.onLogin(user);
                
                // self.props.login({user});
            } else {
              
                //self.setState({loggedIn: false, user: ''});
            }
        });
        
        /*
        //리다이렉트를 다룸
        firebase.auth.getRedirectResult().then(function(result) {
            if (result.credential) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                console.log('login success');
                self.setState({loggedIn: true});
                
                this.props.login(result.user);
                console.log('store user');
            }
            console.log('방금 리다이렉트 되었음!', result.user);
            
            // user.displayName            
            // user.email
            // user.photoURL
            
            }).catch(function(error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            
        });
        */
    }

    render(){
        // const { loggedIn, user } = this.state;
        //console.log(loggedIn);
        return (
                <BrowserRouter>
                    <div>
                        <Switch>   
                            <PublicRoute component={DashBoard} user={this.props.user} exact path='/' />
                            <Route exact path ='/login' component={Login}/>
                            <PrivateRoute component={DashBoard} user={this.props.user} exact path='/dashboard' />
                            <PrivateRoute component={Chat} user={this.props.user} exact path='/chat' />
                        </Switch>
                    </div>
                </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => {
      dispatch({
        type: 'LOGIN',
        payload: user
      });
    }
  }
}
export default connect( mapStateToProps, mapDispatchToProps )(App);
