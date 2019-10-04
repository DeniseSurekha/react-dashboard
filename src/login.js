import React, { Component } from 'react';


import { Radio,Form,Input} from 'antd';

import 'antd/dist/antd.css';
import './login.css';


const RadioGroup=Radio.Group;

const FormItem=Form.Item;





 class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      disabled: true,
  
      modal: false
    }
    };
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
    onChange = (e) => {
      console.log(e.target.value)
      this.setState({
        r_disable:e.target.value,
        
      });
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      
      <Form onSubmit={this.handleSubmit} className="login-form">
      
        
      
    
      <div class="container">
       
 <div class="row">
 
    <div class="col-md-5">
    <FormItem>
    <label  id="ip1">Product name:</label>
    {getFieldDecorator('productName', {
            rules: [{ required: true, message: 'Please input your Product name!' }],
          })(
    <input type="text" className="form-control"  id="ip2" placeholder="Enter product name"/>
          )}
    </FormItem>
    <FormItem>
      
    <label  id="ip1">Product short name:</label>
    {getFieldDecorator('productShortName', {
            rules: [{ required: true, message: 'Please input your Product short name!' }],
          })(
    <input type="text" className="form-control"  id="ip2" placeholder="Enter product short name"/>
          )}
    </FormItem>
    <div class="row">
        <div class="col-md-10">
        <FormItem>
        <label  id="ip1">Item category: </label>
        {getFieldDecorator('itemCategory', {
            rules: [{ required: true, message: 'Please input your Item category!' }],
          })(
 <select className="form-control"  id="ip2">
          <option>select item category</option>
          <option></option>
          </select>)}
          </FormItem>
         </div>

        <div class="col-md-2">
        <label></label>
        <button type="submit" className="btn">+</button>
         </div></div><br/>
  <FormItem>
  {getFieldDecorator('taxInclusive', {
            rules: [{ required: true, message: 'Please input your Tax inclusive!' }],
          })(
  <div class="row">
  <div class="col-md-10">
  
  <label  id="ip1">Tax inclusive:</label><br/>
  <div class="row">
  <div class="col-md-6">
  <input type="radio" name="gender"/>Yes</div>
  <div class="col-md-6">
  <input type="radio"  name="gender"/>No
          </div> </div> </div> </div>)}</FormItem><br/>
  
  
  
  
  
  </div> 

   
    <div class="col-md-2"></div>
    <div class="col-md-5">
    <FormItem>
     <label  id="ip1">Hsn code:</label>
     {getFieldDecorator('hsnCode', {
            rules: [{ required: true, message: 'Please input your Hsn code!' }],
          })(
    <input type="text" className="form-control"  id="ip2" placeholder="Enter Hsn code"/>
           )} </FormItem>
    <FormItem>
    <label  id="ip1">Product MRP:</label>
    {getFieldDecorator('productMRP', {
            rules: [{ required: true, message: 'Please input your Product MRP!' }],
          })(
    <input type="text" className="form-control"  id="ip2" placeholder="Enter product MRP"/>)}
    </FormItem>
    <FormItem>
    <label id="ip1">Product selling price:</label>
    {getFieldDecorator('productSellingPrice', {
            rules: [{ required: true, message: 'Please input your Product selling price!' }],
          })(
    <input type="text" className="form-control"  id="ip2" placeholder="Enter product selling price"/>)}
    </FormItem>
    <FormItem>
    
  
  <label id="ip1">Stock:</label><br/>
  
 
  {getFieldDecorator('radio', {
          rules: [{ required: true, message: 'Please input select radio!' }],
        })(
<RadioGroup onChange={this.onChange.bind(this)}>
  
  <Radio value={1}>Yes</Radio>
   <Radio value={2}>No</Radio>
   
      </RadioGroup>        )}
      </FormItem>
{this.state.r_disable==1 
  ? <FormItem>
     {getFieldDecorator('radioValu', {
          rules: [{ required: true, message: 'Please input select radioValue!' }],
        })(
       <input type="text" className="form-control" id="ip2" placeholder="physical stock" defaultChecked={false} disabled={false} />
      
     )}       
                 
  </FormItem> 
        : <FormItem>
       
        <Input type="text" className="form-control" id="ip2" placeholder="physical stock" defaultChecked={false} disabled={true} />
    
     
    </FormItem>}
    
    <FormItem>
    
  
    <label id="ip1">Bar code:</label><br/>
    
   
    {getFieldDecorator('radio', {
            rules: [{ required: true, message: 'Please input select radio!' }],
          })(
  <RadioGroup onChange={this.onChange.bind(this)}>
    
    <Radio value={1}>Yes</Radio>
     <Radio value={2}>No</Radio>
     
        </RadioGroup>        )}
        </FormItem>
  {this.state.r_disable==1 
    ? <FormItem>
       {getFieldDecorator('radioValu', {
            rules: [{ required: true, message: 'Please input select radioValue!' }],
          })(
         <input type="text" className="form-control" id="ip2" placeholder="Enter physical stock" defaultChecked={false} disabled={false} />
        
       )}       
                   
    </FormItem> 
          : <FormItem>
         
          <Input type="text" className="form-control" id="ip2" placeholder="physical stock" defaultChecked={false} disabled={true} />
      
       
      </FormItem>}
      <FormItem>
    
  
    <label id="ip1">Item available for discount:</label><br/>
    
   
    {getFieldDecorator('radio', {
            rules: [{ required: true, message: 'Please input select radio!' }],
          })(
  <RadioGroup onChange={this.onChange.bind(this)}>
    
    <Radio value={1}>Yes</Radio>
     <Radio value={2}>No</Radio>
     
        </RadioGroup>        )}
        </FormItem>
  {this.state.r_disable==1 
    ? <FormItem>
       {getFieldDecorator('radioValu', {
            rules: [{ required: true, message: 'Please input select radioValue!' }],
          })(
         <input type="text" className="form-control" id="ip2" placeholder="Enter max discount %" defaultChecked={false} disabled={false} />
        
       )}       
                   
    </FormItem> 
          : <FormItem>
         
          <Input type="text" className="form-control" id="ip2" placeholder="Enter max discount %" defaultChecked={false} disabled={true} />
      
       
      </FormItem>}
      <FormItem>
    
  
    <label id="ip1">Optimum stock level:</label><br/>
    
   
    {getFieldDecorator('radio', {
            rules: [{ required: true, message: 'Please input select radio!' }],
          })(
  <RadioGroup onChange={this.onChange.bind(this)}>
    
    <Radio value={1}>Yes</Radio>
     <Radio value={2}>No</Radio>
     
        </RadioGroup>        )}
        </FormItem>
  {this.state.r_disable==1 
    ? <FormItem>
       {getFieldDecorator('radioValu', {
            rules: [{ required: true, message: 'Please input select radioValue!' }],
          })(
         <input type="text" className="form-control" id="ip2" placeholder="Enter minimum stock value" defaultChecked={false} disabled={false} />
        
       )}       
                   
    </FormItem> 
          : <FormItem>
         
          <Input type="text" className="form-control" id="ip2" placeholder="Enter minimum stock value" defaultChecked={false} disabled={true} />
      
       
      </FormItem>}
    <label class="checkbox-inline"  id="ip1">
      <input type="checkbox" name="accept" />Notify me when reach optimum level</label>
      <FormItem>
  {getFieldDecorator('taxInclusive', {
            rules: [{ required: true, message: 'Please input your Tax inclusive!' }],
          })(
 <div class="row">
  <div class="col-md-12">
  <label id="ip1">Product status:</label><br/>
  <div class="row">
  <div class="col-md-3">
  <input type="radio" name="gender"/>Active</div>
  <div class="col-md-3">
  <input type="radio"  name="gender"/>Inactive
  </div>
  <div class="col-md-6">
   </div> </div>   </div> </div>)}</FormItem>

    
    </div>
  </div>
  
<button type="submit" id="ip4">Submit</button>

  
  
</div>

				
</Form>        
      
    )
  }
}
const Sample=Form.create()(Login)
export default Sample;