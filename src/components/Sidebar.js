import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider } from 'material-ui';
import sidebarStyle from '../styles/components/sidebar.css';
class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar-outer">
              <List style={{padding: "0"}}>
                <ListItem button>
                    <Link to='/chat'>
                        <ListItemText primary="채팅" />
                    </Link>
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="물관리" />
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