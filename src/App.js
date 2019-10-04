import React, {Component} from 'react'
import { BackTop } from 'antd';
//import Nividenise from "./nividenise"
//import Form from "./form"
 import Header from "./header"
//import Log from "./log"
export default class App extends Component {
  render() {
    return (
     
      <div> 
   
        <Header/>
        <div>
    <BackTop>
      <div className="ant-back-top-inner" style={{   backgroundColor: '#1088e9', height: '40px',
      width: '40px',  lineHeight: '40px',
      borderRadius: '4px',
      color: 'white',
      textAlign: 'center',
      fontSize: '20px'
     }}>UP</div>
    </BackTop>
  
  </div>
      </div>
    );
  
}
}

