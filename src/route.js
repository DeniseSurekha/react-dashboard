import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Log from './log.js'
import Form from './form.js'

class App extends Component {
 
  
  render() {
    return (
      <Router>
        <div className="App">
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={
              { color:'green' }
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={
              { color:'green' }
            }>About</NavLink>
          </li>
         
          </ul>
        

        <Route path="/" exact strict render={
          () => {
            return ( <Log/>);
          }
        }/>
        <Route path="/about" exact strict render={
          () => {
            return ( <Form/>);
          }
        }/>
        
        </div>
      </Router>
    );
  }
}

export default App;