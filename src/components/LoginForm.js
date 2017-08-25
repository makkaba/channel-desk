import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../actions';
import {Button} from 'material-ui';
import app from '../config/firebase';
import firebase from 'firebase';


class LoginForm extends Component{

    loginHandler(){
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        app.auth().signInWithRedirect(fbProvider);
    }
    render(){
        return(
        <div style={{display: 'inline-block'}}>
           <Button raised color="primary" onClick={()=>this.loginHandler()}>
               페이스북으로 로그인
            </Button>
        </div>
        );
    }
}

export default connect(null, {login})(LoginForm);