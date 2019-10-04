import React  from 'react'
import axios from 'axios'


class App extends React.Component {
    constructor(){
        super();
       this.state = {
            name: '',
            username:'',
            email:''
          }
          this.baseState=this.state;
    }
  

 
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    

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
      console.log(this.state)
      const button=(this.props.edit===true?'update':'add' );
      const submit=(this.props.edit===true?this.handleupdate:this.handleSubmit );

    return (
      <div>
        
           <form onSubmit={submit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Username:
            <input type="text" name="username" value={this.state.username}onChange={this.handleChange} />
          </label>
          <label>
            email:
            <input type="text" name="email" value={this.state.email}onChange={this.handleChange} />
          </label>
            <button type="submit"> {button}</button>
        </form>
      
      
      
      </div>
    );
  }
}
export default App;
