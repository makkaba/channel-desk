import React, { Component } from 'react';
import * as roomAPI from '../services/rooms';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Chart from '../components/Chart';


class DashBoard extends Component{
    
    
    
    render(){
        
        return(
          <div>
            <Navbar />
            <div style={{display: "flex"}}>
              <Sidebar />
              <Chart />
            </div>
          </div>
            
        );
    }
}

export default DashBoard;