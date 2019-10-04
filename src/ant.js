
import React, { Component } from 'react'
import { Table, TableBody, TableHead,TableEditable  } from 'mdbreact';
export default class ant extends Component {
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
  add = (e) => {
    this.setState({ Products: this.state.Products.concat([{ name: '' }]) });
  }
  handleRemoveProduct = (idx) => () => {
    this.setState({ Products: this.state.Products.filter((p, pidx) => idx !== pidx) });
  }
  render() {
    return (
      <div clalss="row">
              <label id="ip1">vendor products:</label>  <label><b>Add item</b></label>
              <button type="button" onClick={this.add}>Add</button>
              {this.state.Products.map((product, idx) => (
                <div>
                
                  {/* <input type="text" placeholder={`name${idx}`} value={product.name}
                    onChange={this.producthandlenamechange(idx)} /> */}
                    <Table bordered><tr><th><button>edit</button></th>
                    <th> <button type="button" onClick={this.handleRemoveProduct(idx)} className="small">delete</button></th></tr>
                    </Table>

               </div>  
                ))}
</div>
    )
  }
}
