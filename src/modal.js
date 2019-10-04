
import React from 'react';
import {Navbar,NavbarNav,NavItem, Container, Button, Modal, ModalBody, ModalHeader,Input,FormInline} from 'mdbreact';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact'

import Tab from './tab.js';
 import axios from 'axios'
class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user:{
        username:"",
        password:"",
        gender:"",
        accept:false,
        phonenumber:"",
        countrycode:"",
        location:{
        city:"",
        street:"",
        pincode:""
        }
      },
        value:[],

      modal: false,
      edit:false,
      delete:false
    };
    console.log("constructors")
  }
  
  change = ({target})=>{

if(target.name==="phonenumber"){
  if(isNaN(target.value)){
    this.setState({
      user:{
        ...this.state.user,
     mob_err:true
      }
    })
  }else{
    this.setState({
      user:{
        ...this.state.user,
      [target.name]:target.value,mob_err:false
      }
    })
  }

}


else{
    console.log(target.name,target.value)
    this.setState({
      user:{
        ...this.state.user,
        [target.name]:target.value
      }
    })
}
  }
chang =({target})=>{
    console.log(target.value, target.name)
   this.setState({
     ...this.state,
     user:{
       ...this.state.user,
       location:{...this.state.user.location,
        [target.name]:target.value,
       }
      }
   })
}
submit = (e) =>{
    e.preventDefault();

let value={};

          value.username=this.state.user.username,
            value.password=this.state.user.password,
            value.phonenumber=this.state.user.countrycode + this.state.user.phonenumber,
            value.gender=this.state.user.gender;
            value.accept=this.state.user.accept;
             value.location=this.state.user.location;
              this.setState({
                value:[...this.state.value,value],
                user:{
                username:'',password:'',phonenumber:'',countrycode:'',gender:'',accept:'',location:''
               } })
              this.toggle(); 
              
              }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  check(){
    console.log("inside")
   
      this.setState({
        user:{
          ...this.state.user,
      accept: !this.state.user.accept  
      }

    });
  }
  editData = (user) =>{
    console.log(user)
    this.toggle();
    
    this.setState({ user})

  }
  
componentDidMount(){
  console.log("did mount")
// axios.get('https://jsonplaceholder.typicode.com/todos').
// then(res=>{
//   let data =res.data;
//   this.setState({name:"FGGG" })
//   console.log(data)
// })
} 
componentWillReceiveProps(props){
console.log("receive props")
}
componentWillMount(){
console.log("will mount")
}
componentDidUpdate(){
console.log("did update")
}
UNSAFE_componentWillUpdate(){
console.log("will update")
}
  render() {
    console.log(this.state.user)
    return (
      <div>
      <Navbar light color="indigo" >
      <NavbarNav right>
        <NavItem>
        <Button color="primary" onClick={() => this.toggle()} >login</Button>
        </NavItem>
        </NavbarNav>
        </Navbar> 
            
        
  <Container>
     
         
            
        <Modal isOpen={this.state.modal} toggle={() => this.toggle()} centered>
    
          <ModalHeader toggle={() => this.toggle()}><h3>LOGIN FORM</h3></ModalHeader>
       
          <ModalBody>
          <form onSubmit={this.submit}>
        <div>
            <label>Username</label>
        <input type="text" className="form-control" name="username"  value={this.state.user.username}
        onChange={this.change.bind(this)}/>
        <label>Password</label>
    <input type="password" className="form-control" name="password" 
    value={this.state.user.password} onChange={this.change.bind(this)}/><br/>
   <label class="radio-inline" >
   Gender:<input type="radio" name="gender" value="male" checked={this.state.user.gender==="male"}
        onChange={this.change.bind(this)}/>Male
<input type="radio" name="gender" value="female" checked={this.state.user.gender==="female"}
        onChange={this.change.bind(this)}/>Female</label><br/>
        
        <label>City</label>
        <input type="text" className="form-control" name="city"  value={this.state.user.location.city}onChange={this.chang.bind(this)}/>
        <label>Street</label>
        <input type="text" className="form-control" name="street"  value={this.state.user.location.street}onChange={this.chang.bind(this)}/>
        <label>Pincode</label>
        
      <input type="number" className="form-control"  name="pincode"  value={this.state.user.location.pincode}onChange={this.chang.bind(this)}/>
      <div className="row">
      <div className="col-4">
      <label>Country code</label>
      <select className="form-control"  className="form-control" name="countrycode" 
       value={this.state.user.countrycode}onChange={this.change.bind(this)}> 
       <option>select code</option>
        <option value="+91"> India</option>
        <option value="+1"> US</option>

      </select>
      </div>
      <div className="col-8">
      <label>Phone number</label>

      <input type="tel" className="form-control" name="phonenumber" minLength="10" maxLength="10"
       value={this.state.user.phonenumber}onChange={this.change.bind(this)}/>
       {this.state.user.mob_err ?<span className="error">please enter a valid number</span>  :null}
    
      </div>
      </div><br/>
      <label class="checkbox-inline">
      <input type="checkbox" name="accept"  isCheck={this.state.user.accept ?true :false} onChange={() => this.check()}
             />Accept</label>

        <div className="text-center mt-4">
        <button className="btn btn-unique">Submit</button>
         </div>                     
        </div>
        

    </form>
          </ModalBody>
          
        </Modal>
        <br/><br/>
    
      <br/><br/>
        <Tab data={this.state.value} edit={this.editData} /> 
        </Container>
    
       </div>

      
    );
  
  }
}

export default ModalPage;