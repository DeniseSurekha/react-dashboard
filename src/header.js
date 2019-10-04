import React, { Component } from 'react'
import Log from './log.js'
import Form from './form.js'
import Page from './page.js'
import Search from './search.js'
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Menu, Dropdown, Icon } from 'antd';

const { SubMenu } = Menu;
export default class Header extends Component {
    render() {
        const menu = (
            <Menu>
              <Menu.Item><NavLink to="/page" exact >pages</NavLink></Menu.Item>
              <Menu.Item><NavLink to="/search" exact >search</NavLink></Menu.Item>
              <SubMenu title="3rd menu item">
                <Menu.Item>3rd menu item</Menu.Item>
                <Menu.Item>4th menu item</Menu.Item>
              
              </SubMenu>
             
            </Menu>
          );
          

        return (
            <Router>
            <div>
                
                                <header className="site-header">
	<div className="inner-wide">
		<p className="site-title"><a href="https://curious.justgoodthemes.com">Deniz</a></p>
			<nav className="site-navigation" aria-label="Main Menu">
	<h2 className="screen-reader-text">Explore Website</h2>
	<ul className="menu">
		<li className="menu-item home" role="presentation"> <NavLink to="/" exact >Home</NavLink></li>
		<li className="menu-item about" role="presentation"><NavLink to="/about" exact>About</NavLink></li>
		<li className="menu-item style-guide" role="presentation">
            
        <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Cascading menu <Icon type="down" />
    </a>
  </Dropdown></li>
		<li className="menu-item ghost-hosting" role="presentation"><a href="">Ghost hosting</a></li>
		<li className="menu-item buy-curious-theme" role="presentation"><a href="">Buy Curious Theme</a></li>
	</ul>
</nav>


		
	</div>
</header>
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
         <Route path="/page" exact strict render={
          () => {
            return ( <Page/>);
          }
        }/>
         <Route path="/search" exact strict render={
          () => {
            return ( <Search/>);
          }
        }/>

            </div>
            </Router>
        )
    }
}
