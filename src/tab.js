import React, {Component} from 'react';
import { Table, TableBody, TableHead,TableEditable  } from 'mdbreact';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact'

export default class tab extends Component{
     constructor(props){
         super(props);
         this.state={
        }
     }

    getData = (a) =>{
        console.log(a);
        this.setState({
           data:a
            

        })

        
    }
    
    render(){
console.log(this.props)
console.log(this.state)
var data=this.props.data.map((item,i)=>{
    console.log(item)

    return(
        <DropdownItem onClick ={this.getData.bind(this,item)}>{item.username}</DropdownItem>
    )
}   )

return(
    <div>
    <Dropdown >
      <DropdownToggle caret color="primary">
      Select
      </DropdownToggle>
        <DropdownMenu>
            {data}
        </DropdownMenu>
      </Dropdown>
 <Table bordered>
<TableHead>
<tr>
<th>
Username
</th>

<th>
    Password
</th>
<th>
    City
</th>
<th>
    Street
    </th>
    <th>
        Pincode
        </th>
<th>Phone number</th>
<th>Gender</th>
<th>Accept{true}</th>
<th>action</th>
</tr>
</TableHead>

<TableBody>
    {this.state.data!==undefined
   ? <tr>
    <td>{this.state.data.username}</td>
    <td>{this.state.data.password}</td>
    <td>{this.state.data.location.city}</td>
    <td>{this.state.data.location.street}</td>
    <td>{this.state.data.location.pincode}</td>
    <td>{this.state.data.phonenumber}</td>
    <td>{this.state.data.gender}</td>
    <td>{this.state.data.accept}</td>
    <td><button>Remove</button></td>
    </tr>
    : "no data"
    }


</TableBody>


</Table>
</div>
)
    }
    }