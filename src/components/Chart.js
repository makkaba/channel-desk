import React, { Component } from 'react';
import * as waterAPI from '../services/water';
import { LineChart, Line, XAxis, YAxis, 
        Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import * as _ from 'lodash';
import Moment from 'moment';
import ko from 'moment/locale/ko';
Moment.locale("ko", ko);

class Chart extends Component{
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
            // _.reverse(data);
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
        return (
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
        );
    }
}

export default Chart;