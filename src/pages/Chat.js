import React, { Component } from 'react';
import * as roomAPI from '../services/rooms';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

/*
room 정보를 가져와서 리스트로 뿌려준다
*/

class Chat extends Component{
    componentDidMount(){
        
        roomAPI.getList().then((result)=> {
            console.log(result.data);
        });
    }
    render(){
        
        return(
          <div>
            <Navbar />
            <div style={{display: "flex"}}>
              <Sidebar />
              <div>
                  
              </div>
            </div>
          </div>
            
        );
    }
}

export default Chat;