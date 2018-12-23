import React from 'react'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'
import {Card, Menu, Row, Col, Dropdown, Icon, message, Button} from 'antd'

export default class Add extends React.Component{
  render(){
    const menu2 = (
      <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <Menu.SubMenu title="sub menu">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="disabled sub menu" disabled>
          <Menu.Item>5d menu item</Menu.Item>
          <Menu.Item>6th menu item</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )

    return (
      <div>
        <CustomBreadcrumb arr={['添加']}/>
        <Card bordered={false} className='card-item'>
              {/* <Dropdown overlay={menu2}><a href="">Cascading menu <Icon type="down"/></a></Dropdown>&emsp;&emsp; */}
              <text>添加至&nbsp;&nbsp;&nbsp;&nbsp;</text>
              <Dropdown overlay={menu2}><Button>Cascading menu <Icon type="down"/></Button></Dropdown>
              <a href='#'>&nbsp;&nbsp;&nbsp;&nbsp;配置栏目</a>
        </Card>
      </div>
    )
  }
}