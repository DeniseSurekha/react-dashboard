import React, { Component } from 'react'
import './log.css'
export default class log extends Component {
    render() {
        return (
            <div className='container' >
              <div className='login-form col-md-4 offset-md-4'>
              <h1 className='title'>login here </h1> 
              <form>  
              <div className='form-group'>  
              <label> Username   </label>
              <input type='text' name='' className='form-control'/>    
                 </div>  
                 <div className='form-group'>  
              <label> Password  </label>
              <input type='text' name='' className='form-control'/>    
                 </div> 
                 <button className='btn btn-primary btn-block'>  
        Login
                 </button> 
                    </form>  
                </div>  
            </div>
        )
    }
}
