import React from 'react'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard';
import { Card, Menu, Row, Col, Dropdown, Icon, message, Button ,Form,Input} from 'antd';
const FormItem = Form.Item

export default class Manager extends React.Component {
  render() {
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
    );

    let cates = [
      {
        title: '我的新闻',
        icon: '../../../assets/img/tubiao_1.jpg',
        description: '轻松打通米拓建站和米拓流程两个系统，让用户在使用米拓企业建站系统'
      },
      {
        title: '我的新闻',
        icon: '../../../assets/img/tubiao_1.jpg',
        description: '轻松打通米拓建站和米拓流程两个系统，让用户在使用米拓企业建站系统'
      },
      {
        title: '我的新闻',
        icon: '../../../assets/img/tubiao_1.jpg',
        description: '轻松打通米拓建站和米拓流程两个系统，让用户在使用米拓企业建站系统'
      },
      {
        title: '我的新闻',
        icon: '../../../assets/img/tubiao_1.jpg',
        description: '轻松打通米拓建站和米拓流程两个系统，让用户在使用米拓企业建站系统'
      },
      {
        title: '我的新闻',
        icon: '../../../assets/img/tubiao_1.jpg',
        description: '轻松打通米拓建站和米拓流程两个系统，让用户在使用米拓企业建站系统'
      },
      {
        title: '我的新闻',
        icon: '../../../assets/img/tubiao_1.jpg',
        description: '轻松打通米拓建站和米拓流程两个系统，让用户在使用米拓企业建站系统'
      }
    ];
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
      },
    };
    return (
      <div>
        <CustomBreadcrumb arr={['添加']} />
        <div style={styles.add_main}>
          <Card bordered={false}>
          <div {...formItemLayout} style={{display:'flex',flexDirection: 'row'}}>
            <img src={require('../../../assets/img/search.jpg')} alt="" height={30} width={40} />
              <Input placeholder="请输入栏目名称" style={{width:200}}/>
            </div>
          </Card>
          <div style={styles.h_line} />

          <div style={styles.app_content}>
            {cates.map((cate) => {
              let { title, icon } = cate || {};
              // console.log('hql','icon='+icon);
              return (
                <Col span={6} style={styles.categoryItem}>
                  <img src={require('../../../assets/img/tubiao_5.png')} alt="" />
                  <text style={{ display: 'flex', marginTop: 10 ,fontWeight:'bold'}}>{title}</text>
                </Col>
              )
            })}
          </div>

        </div>
      </div>
    )
  }
}


const styles = {
  add_main: {
    backgroundColor: 'white',
    flex: 1,
    border: '1px solid #cccccc'
  },
  h_line: {
    backgroundColor: '#cccccc',
    height: 1
  },
  app_content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15
  },
  categoryItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15
  }
}