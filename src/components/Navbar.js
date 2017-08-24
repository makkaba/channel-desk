import React, {Component} from 'react';
import * as firebase from '../config/firebase';
import LoginForm from './LoginForm';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Button, Grid, Avatar } from 'material-ui';

import styles from '../styles/components/navbar.css';

class Navbar extends Component{
  constructor(props){
    super(props);
    this.logoutHandler = this.logoutHandler.bind(this);
  }
  logoutHandler(){
    
    // var that = this;
    firebase.auth.signOut().then(() => {
      //signout
      this.props.onLogoutClick();
      // that.props.onLogoutClick();
    }, (error)=>{
    });
  }
  render(){
    const user = this.props.user.user;
    console.log("NAVBAR:",this.props.user);
    return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <div className="nav-outer">
                        <div className="nav-inner">
                            <div className="nav-left">
                                <Button>lab</Button>
                            </div>
                            <div className="nav-right">
                                <Link to='/'><Button>홈</Button></Link>
                                <Link to='/dashboard'><Button>대시보드</Button></Link>
                                { user === "" ? 
                                  <Link to='/login'><Button>로그인</Button></Link>
                                  : <div className="avatar-outer"><div className="avatar-inner"><Avatar alt="display name" src={user.photoURL}></Avatar><Button onClick={()=>this.logoutHandler()}>로그아웃</Button></div></div>
                                }
                                
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
    );
  }
}
function mapStateToProps(state){
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onLogoutClick: () => {
      dispatch({
        type: 'LOGOUT'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);