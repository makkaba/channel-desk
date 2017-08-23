import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../actions';
import {Button} from 'material-ui';
import firebase from 'firebase';


class LoginForm extends Component{

    loginHandler(){
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(fbProvider);
    }
    logoutHandler(){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            // this.props.logout();
        }, function(error) {
        // An error happened.
        });
    }
    render(){
        return(
        <div style={{display: 'inline'}}>
           <Button onClick={()=>this.loginHandler()}>
               로그인
            </Button>
            <Button onClick={()=>this.logoutHandler()}>
               로그아웃
            </Button>
        </div>
        );
    }
}

export default connect(null, {login})(LoginForm);