import React, {Component} from 'react';
import './App.css'
import Form from './form';
class App extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""

        }
    }
    change = ({target})=>{
        console.log(target.name,target.value)
        this.setState({
            [target.name]:target.value
        })
    }
        render(){

        console.log(this.state)
        return(
        <div className="App">
        <input type="text" name="name" placeholder="enter username" value={this.state.username}
        onChange={this.change.bind(this)}/><br/>
        <br/>
 <input type="password" name="name" placeholder="enter password" value={this.state.password}
        onChange={this.change.bind(this)}/>

    
        <Form />
        </div>
    );
}
}
export default App;