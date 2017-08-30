import React, { Component } from 'react';
import { List, ListItem, ListItemText, Divider } from 'material-ui';
import sidebarStyle from '../styles/components/sidebar.css';
class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar-outer">
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
        );
    }
}
export default Sidebar;