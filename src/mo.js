import React,{Component} from 'react'
import axios from 'axios'


class App extends React.Component {
    constructor(){
        super();
       this.state = {
          
            body:''
          }
          this.baseState=this.state;
    }
  

 
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = this.state;

    axios.post(`https://jsonplaceholder.typicode.com/users`, this.state )
      .then(res => {
        console.log(res);
        console.log(res.data);
this.props.submit(res.data)
      })
      this.props.closemodal();
  }
  handleupdate=(e)=>{
    e.preventDefault();
     console.log(this.state)
     axios.put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, this.state )
     .then(res => {
       console.log(res);
       console.log(res.data);
     })
     this.props.closemodal();

  }
componentWillReceiveProps(newprops){
if(newprops.edit===true){
 console.log('edit')
this.setState(newprops.editdata)
}else{
this.setState(this.baseState);
}
}

  render() {
    console.log(this.state.body);   

    return (
      <div>
        
           <form >
         
           content:   <p>
       
        {this.state.body}
          </p>
      
        </form>
      
      
      
      </div>
    );
  }
}
export default App;

