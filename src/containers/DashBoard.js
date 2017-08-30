import React, { Component } from 'react';
import * as roomAPI from '../services/rooms';
import * as waterAPI from '../services/water';
import Navbar from '../components/Navbar';
import { List, ListItem, ListItemText, Divider } from 'material-ui';
import { LineChart, Line, XAxis, YAxis, 
        Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import * as _ from 'lodash';
import Moment from 'moment';
import ko from 'moment/locale/ko';
Moment.locale("ko", ko);

class DashBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        
    }
    componentDidMount(){
        
        waterAPI.getMyList('kdfjsdlkflkj').then((result)=> {
            var data = Object.values(result.data).map((item)=> ({
                name: Moment(item.created_at).format("YYYY-MM-DD"),
                water: item.quantity,
                fromNow: Moment(item.created_at).fromNow()
            }));
            _.reverse(data);
            var groups = _.groupBy(data, function(item){
                return item.name;
            });
            var filteredData = _.map(groups, function(value, key){
                var sum = 0;
                var fromNow = '';
                value.forEach(function(cup){
                    sum += cup.water;
                    fromNow = cup.fromNow;
                });
                return {
                    name: key,
                    water: sum,
                    fromNow: fromNow
                };
            });
            this.setState({data: filteredData});
        });
    }
    
    render(){
        const { data } = this.state;
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
                  <div style={{flex: "1 1 auto", margin: "5%"}}>
                      <ResponsiveContainer>
                          <LineChart data={data}>
                              <XAxis dataKey="fromNow"/>
                              <YAxis/>
                              <CartesianGrid strokeDasharray="3 3"/>
                              <Tooltip/>
                              <Legend />
                              <Line type="monotone" dataKey="water" stroke="#8884d8" activeDot={{r: 8}} />
                          </LineChart>
                      </ResponsiveContainer>
                  </div>
            </div>
          </div>
            
        );
    }
}

export default DashBoard;