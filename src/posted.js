import React, { Component } from 'react/index.js'
import axios from 'axios'
import Data from './data.js';

import { Modal, Button } from 'antd';
export default class table extends Component {
state = {
    persons:[],
    edit:false,
    editdata:{}
    
  }
  showModal = () => {
    this.setState({
      visible: true,
      edit:false
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
      edit:false
    });
  }

  handleRemove = (idx) => {
    this.setState({
      persons: this.state.persons.filter((p,pidx) => idx !== pidx) });
    
  };
 
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
      edit:false
    });
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        
        this.setState({ persons });
      })
  }
postdata=(a)=>{
  this.setState({persons:[...this.state.persons,a] });
}
editdata=(e)=>
{
  
  this.setState({
    visible: true,
    edit:true,
    editdata:e
  });
}
  render() {
console.log(this.state.persons)
    let data=this.state.persons.map((item,idx)=>{
      return(
      <tr key={idx}>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.username}</td>
<td>{item.email}</td>
<td><button onClick={this.editdata.bind(this,item)}>edit</button><button onClick={this.handleRemove.bind(this,idx)}>delete</button></td>
      </tr>
      )
    })
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Data submit={this.postdata} closemodal={this.handleOk} edit={this.state.edit} editdata={this.state.editdata}/>
      
        </Modal>
        
        <table>
          <th>Id</th>
<th>Name</th>
<th>Username</th>
<th>Mail</th>
<th>Action</th>
<tbody>
  {data}
</tbody>

        </table>
      </div>
    )
  }
}