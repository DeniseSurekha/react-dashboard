import React, { Component } from 'react'
import './denis.css';
import { Table, TableBody, TableHead,TableEditable  } from 'mdbreact';
export default class denis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Vendorname: '',
      Contactno: '',
      Address: '',
      Phoneno: '',
      State: '',
      Country: '',
      Creditlimit: '',
      Creditbalance: '',
      Mail: '',
      Vendoridentityid: '',
      Totalnoofproducts: '',
      Products: [{ name: '' }],


      modal: false
    }
  };
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  inputChange = (a) => {
    console.log(a.target.name, a.target.value)
    this.setState({ [a.target.name]: a.target.value })
  }
  producthandlenamechange = (idx) => (evt) => {
    const newproducts = this.state.Products.map((product, pidx) => {
      if (idx !== pidx) return product;
      return { ...product, name: evt.target.value };
    })
    this.setState({ Products: newproducts })


  }
  handlesubmit = (e) => {
    e.preventDefault();
    const { name, Products } = this.state;
    alert(`Incorporated: ${name} with ${Products.length} Products`);
  }
  add = (e) => {
    this.setState({ Products: this.state.Products.concat([{ name: '' }]) });
  }
  handleRemoveProduct = (idx) => () => {
    this.setState({ Products: this.state.Products.filter((p, pidx) => idx !== pidx) });
  }
  render() {
    return (

      <div class="container">
      <fieldset>
        <div class="row form">
          <div class="col-md-5">
            <label id="ip1">Vendor name:</label>
            <input type="text" className="form-control" id="ip2" placeholder="Enter vendor name" /><br />
            <label id="ip1" >Contact no:</label>
            <input type="text" className="form-control" id="ip2" placeholder="Enter contact no" /><br />
            <label id="ip1">Address:</label>
            <input type="text" className="form-control" id="ip2" placeholder="Enter vendor address" /><br />
            <label id="ip1">Phone no:</label>
            <input type="text" className="form-control" id="ip2" placeholder="Enter vendor phone no" /><br />
             <label id="ip1">State:</label>
            <select className="form-control" id="ip2">
              <option value="" class="placeholder">choose state</option>
              <option></option>
            </select><br />
            <label id="ip1">Country: </label>
            <select className="form-control" id="ip2">
              <option>choose country</option>
              <option></option>
            </select><br />
            <label id="ip1">Credit limit:</label>
            <input type="text" className="form-control" id="ip2" placeholder="Enter credit limit" /><br />
            <label id="ip1">Credit balance:</label>
            <input type="text" className="form-control" id="ip2" placeholder="Enter credit balance" /><br />


          </div>



          <div class="col-md-2"></div>


          <div class="col-md-5">
            <label id="ip1">Mail:</label>
            <input type="text" className="form-control" id="ip2" placeholder="Enter mail ID" /><br />
            <label id="ip1">Vendor Identity ID:</label>
            <input type="text" className="form-control" id="ip2" placeholder="Enter vendor identification no/ID" /><br />
            <label id="ip1">Total no of products:</label>
            <input type="text" className="form-control" id="ip2" /><br />
            <div clalss="row">
              <label id="ip1">vendor products:</label>  <label><b>Add item</b></label>
              <button type="button" onClick={this.add}>Add</button>
              {this.state.Products.map((product, idx) => (
                <div className="product">
                   <input type="text" placeholder={`name${idx}`} value={product.name}
                    onChange={this.producthandlenamechange(idx)} /> 
                  

                  <button type="button" onClick={this.handleRemoveProduct(idx)} className="small">x</button>
                </div>))}
</div>
<fieldset>
  
    <div class="row">
                <div class="col-md-12">
                  <label id="ip1">Product status:</label><br />
                  <div class="row">
                    <div class="col-md-3">
                      <input type="radio" name="gender" checked />Active </div>
                    <div class="col-md-3">
                      <input type="radio" name="gender" />Inactive
  </div>
                    <div class="col-md-6">
                    </div> </div>   </div> </div>

</fieldset>

            </div>


          </div>

          <div class="row" >
            <div class="col-md-4"></div><div class="col-md-4">
              <div class="row">
                <div class="col-md-6"><button type="submit" id="ip4">SAVE</button></div>
                <div class="col-md-6"><button type="submit" id="ip4">CANCEL</button></div>

              </div>


            </div>  <div class="col-md-4"></div>



          </div>
          </fieldset>
        </div>



        )
      }
    }
