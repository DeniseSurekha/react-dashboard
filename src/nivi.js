import React, {Component} from 'react';
import {Navbar,Button} from 'mdbreact';
import Tab from './tab';
import './App.css';
// import Form from './form';
//  import Tab from './tab'; 
class App extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:"",
            location:{
            city:"",
            street:"",
            pincode:""
            },
            value:[]
    
      


        }
    }
    change = ({target})=>{
        console.log(target.name,target.value)
        this.setState({
            [target.name]:target.value
        })
    }
    chang =({e})=>{
        console.log(e.target.value, e.target.name)
       this.setState({
           location:{...this.state.location,
            [e.target.name]:e.target.value,
          
        

           }
       })
    }
    submit = (e) =>{
        e.preventDefault();
        this.setState({
            value:[...this.state.value,
                {

                username:this.state.username,
                password:this.state.password,
                    city:this.state.location.city,
                    street:this.state.location.street,
                    pincode:this.state.location.pincode

                
            }]
            })
        
    }



           
        render(){

        console.log(this.state)
        return(
        <div className="App">
        <Navbar light color="indigo">
        <Button color="primary" onClick={() => this.toggle(14)} >login</Button>

</Navbar>
    
        <form onSubmit={this.submit}>
        <div>
        <input type="text" name="username" placeholder="enter username" value={this.state.username}
        onChange={this.change.bind(this)}/><br/>
        <br/>
 <input type="password" name="password" placeholder="enter password" value={this.state.password}
        onChange={this.change.bind(this)}/><br/><br/>
        <input type="text" name="city" placeholder="enter city" value={this.state.location.city}onChange={this.chang.bind(this)}/><br/><br/>
        <input type="text" name="street" placeholder="enter street" value={this.state.location.street}onChange={this.chang.bind(this)}/><br/><br/>
        <input type="number" name="pincode" placeholder="enter pincode" value={this.state.location.pincode}onChange={this.chang.bind(this)}/><br/><br/>
        <button>submit</button>
        </div>

    </form>
    <Tab data={this.state.value}/>
        </div>

    );
}
}
export default App;