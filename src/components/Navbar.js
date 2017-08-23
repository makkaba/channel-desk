import React, {Component} from 'react';
import LoginForm from './LoginForm';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import styles from '../styles/components/navbar.css';

function Navbar(props){
    const classes = props.classes;
    return (
        <div>
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
                                <Link to='/login'><Button>로그인</Button></Link>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;