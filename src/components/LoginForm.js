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
    render(){
        return(
        <div style={{display: 'inline-block'}}>
           <Button raised color="primary" onClick={()=>this.loginHandler()}>
               페이스북
            </Button>
        </div>
        );
    }
}

export default connect(null, {login})(LoginForm);