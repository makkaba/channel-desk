import style from '../styles/common/index.css';
import React, { Component } from 'react';
import { Grid } from 'material-ui';

class Center extends Component{
  render(){
    return(
      <div className="center-outer">
        <div className="center-inner">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Center;