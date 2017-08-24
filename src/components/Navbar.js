import React, {Component} from 'react';
import { Redirect } from 'react-router';
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
    this.state = {
        redirectToReferrer: false
    };
    this.logoutHandler = this.logoutHandler.bind(this);
  }
  logoutHandler(){
      //firebase 모듈로 분리가 이미 되어있는 상태
    firebase.auth.signOut().then(() => {
      this.props.onLogoutClick();
      this.setState({ redirectToReferrer: true });
    }, (error)=>{
    });
  }
  
  render(){
    //   debugger;
      console.log(this.state);
      const user = this.props.user.user;
      const { redirectToReferrer } = this.state;
    
    
    if( redirectToReferrer ) {
        return (
            <Redirect to={'/'} />
        );
    }
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
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutClick: () => {
      dispatch({
        type: 'LOGOUT'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);