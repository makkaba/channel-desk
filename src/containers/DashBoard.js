import React, { Component } from 'react';
import * as roomAPI from '../services/rooms';

import Navbar from '../components/Navbar';
import Chart from '../components/Chart';
import { List, ListItem, ListItemText, Divider } from 'material-ui';

class DashBoard extends Component{
    
    
    
    render(){
        
        return(
          <div>
            <Navbar />
            <div style={{display: "flex"}}>
              <div style={{maxWidth: "250px", flex: "1 1 auto", height: "100vh", left: "0", borderRight:"1px solid rgba(0,0,0,0.12)"}}>
                <List style={{padding: "0"}}>
                  <ListItem button>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                  <Divider light />
                  <ListItem button>
                    <ListItemText primary="Drafts" />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary="Trash" />
                  </ListItem>
                </List>
              </div>
              <Chart />
            </div>
          </div>
            
        );
    }
}

export default DashBoard;