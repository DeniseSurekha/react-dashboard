import React,{Component} from 'react';
class Table extends Component{
*    render(){
        console.log(this.props)
       let tbody= this.props.value.map((item,i) => {
            console.log(item);
            return (
            <tr key={i}>
            <td>{item.name}</td>
            <td>{item.description}</td>
        </tr>
            )
        })
        return(
            <div className="Table">
            {this.props.value.length>0 
                ?<table>
                    <thead><tr><th>project name</th><th>Description</th></tr>
                    </thead>
                <tbody>
                    {tbody}
               </tbody>
                    </table>
                    :null}
                    </div>
                    

        );
    }
}
export default Table;

