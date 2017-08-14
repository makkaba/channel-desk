import React, { Component } from 'react';
import * as roomAPI from '../services/rooms';


class DashBoard extends Component{
    constructor(){
        super();
        roomAPI.getList().then((result)=> console.log(result));
    }
    
    render(){
        return(
            <div>dash board!!!</div>
        );
    }
}

export default DashBoard;