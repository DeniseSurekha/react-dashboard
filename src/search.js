import React from "react";
import axios from 'axios'
import { Card } from 'antd';

const { Meta } = Card;
  
  export default class Search extends React.Component {
  
    constructor(props) {
  
      super(props);
  
      this.state = {
  
        searchString: "",
  
        users: []
  
      };
  
      this.handleChange = this.handleChange.bind(this);
  
    }
  
  
  
    componentDidMount() {
  
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=harry+potter`)
      .then(res => {
        const users = res.data.items;
        this.setState({ users });
      })
      this.refs.search.focus();
  
    }
  
  
  
    handleChange() {
  
      this.setState({
  
        searchString: this.refs.search.value
  
      });
  
    }
  
  
  
    render() {
  
      let _users = this.state.users;
  
      let search = this.state.searchString.trim().toLowerCase();
  
  
  
      if (search.length > 0) {
  
        _users = _users.filter(function(user) {
          let { title } = user.volumeInfo;
          return title.toLowerCase().match(search);
  
        });
  
      }
  
  
  
      return (
  
        <div>
   <div className='row'>
   <div className='col-md-4'>
          <h3>React - simple search</h3>
          <input
  
  type="text"

  value={this.state.searchString}

  ref="search"

  onChange={this.handleChange}

  placeholder="type name here"

/>
</div>
</div>

          
  
           
              {_users.map(l => {
                 let { title, imageLinks, infoLink,book,index } = l.volumeInfo;
  
                return (
                  <a
                  key={index}
                  className="book"
                  href={infoLink}
                  target="_blank"
                  rel="noopener"
                  > 
                  <div className='col-md-4'>
                  
                   
                  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img
      src={undefined !== imageLinks ? imageLinks.thumbnail : {book}}
      alt={`Pictured: The cover for the book ${title}.`}
      className="bookCover"
    />}
  >
    <Meta title= {title} description="www.instagram.com" />
  </Card>
                  </div>
  
          
                
                </a>
  
                );
  
              })}
    
            
  
        </div>
  
      );
  
    }
  
  }
  
  
  