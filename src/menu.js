import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'antd';

const { SubMenu } = Menu;
export default class menu extends Component {
    render() {
        const menu = (
            <Menu>
              <Menu.Item>1st menu item</Menu.Item>
              <Menu.Item>2nd menu item</Menu.Item>
              <SubMenu title="3rd menu item">
                <Menu.Item>3rd menu item</Menu.Item>
                <Menu.Item>4th menu item</Menu.Item>
                <SubMenu title="sub menu">
                <Menu.Item>5rd menu item</Menu.Item>
                <Menu.Item>6th menu item</Menu.Item>
              </SubMenu>
              </SubMenu>
             
            </Menu>
          );
          

        return (
            <div>
           <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Cascading menu <Icon type="down" />
    </a>
  </Dropdown>
     
 
            </div>
        )
    }
}
