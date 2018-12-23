import React from 'react'
import { Carousel } from 'antd';
import './style.css';
import CustomBreadcrumb from '../../components/CustomBreadcrumb/index';
import { Row, Col, Icon, Skeleton, Switch, Card, Avatar, List } from 'antd';
const { Meta } = Card;

class Home extends React.Component {

  render() {
    let apps = [
      {
        title: '微信公众号管理应用',
        description: '自定义菜单设置，支持最多添加3个一级菜单，每个一级菜单下'
      },
      {
        title: '米拓流程系统同步插件',
        description: '轻松打通米拓建站和米拓流程两个系统，让用户在使用米拓企业建站系统'
      },
      {
        title: '米拓流程系统同步插件',
        description: '轻松打通米拓建站和米拓流程两个系统，让用户在使用米拓企业建站系统'
      },
      {
        title: '米拓流程系统同步插件',
        description: '轻松打通米拓建站和米拓流程两个系统，让用户在使用米拓企业建站系统'
      },
      {
        title: '米拓流程系统同步插件',
        description: '轻松打通米拓建站和米拓流程两个系统，让用户在使用米拓企业建站系统'
      },
      {
        title: '米拓流程系统同步插件',
        description: '轻松打通米拓建站和米拓流程两个系统，让用户在使用米拓企业建站系统'
      }
    ];
    const data = [
      '关于即将上调米拓建站相关产品价格的通知',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
      '备案新站上线1天就有百度排名！'
    ];
    return (
      <div className='home'>
        <CustomBreadcrumb arr={['后台首页']} />
        <div style={styles.guide_main} >
          <div style={styles.title_layout}>
            <text style={{ fontSize: 14 }}>新手指引</text>
          </div>
          <div style={{ backgroundColor: '#cccccc', height: 1, flex: 1 }} />
          <Row type="flex" justify="center" style={{ padding: 20 }}>
            <Col span={4} style={{ marginHorizontal: 10, paddingVertical: 15 }} align='middle'>
              <Icon type="solution" style={{ fontSize: 28 }} />
              <p />
              <text>基本信息</text>
            </Col>
            <Icon type="double-right" style={{ fontSize: 28, alignSelf: 'center' }} />

            <Col span={4} style={{ marginHorizontal: 10, paddingVertical: 15 }} align='middle'>
              <Icon type="setting" style={{ fontSize: 28 }} />
              <p />
              <text>配置栏目</text>
            </Col>
            <Icon type="double-right" style={{ fontSize: 28, alignSelf: 'center' }} />

            <Col span={4} style={{ marginHorizontal: 10, paddingVertical: 15 }} align='middle'>
              <Icon type="layout" style={{ fontSize: 28 }} />
              <p />
              <text>调试外观</text>
            </Col>
            <Icon type="double-right" style={{ fontSize: 28, alignSelf: 'center' }} />

            <Col span={4} style={{ marginHorizontal: 10, paddingVertical: 15 }} align='middle'>
              <Icon type="plus" style={{ fontSize: 28 }} />
              <p />
              <text>发布内容</text>
            </Col>
            <Icon type="double-right" style={{ fontSize: 28, alignSelf: 'center' }} />

            <Col span={4} style={{ marginHorizontal: 10, paddingVertical: 15 }} align='middle'>
              <Icon type="share-alt" style={{ fontSize: 28 }} />
              <p />
              <text>分享心情</text>
            </Col>

          </Row>
        </div>

        {/* 推荐应用 */}
        <div style={styles.app_main} >
          <div style={styles.title_layout}>
            <text style={{ fontSize: 14 }}>推荐应用</text>
          </div>
          <div style={{ backgroundColor: '#cccccc', height: 1, flex: 1 }} />
          <div style={styles.app_content}>
            {apps.map((app) => {
              let { title, description } = app || {};
              return (
                <Card style={{ width: 300, marginTop: 16, marginLeft: 16 }} loading={false} bordered={true}>
                  <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ width: 80, height: 80, borderRadius: 6 }} />}
                    title={title}
                    description={description}
                  />
                </Card>
              )
            })}
          </div>
        </div>

        {/* 新闻 */}
        <div style={styles.app_main} >
          <div style={styles.title_layout}>
            <text style={{ fontSize: 14 }}>重要公告</text>
          </div>
          <div style={{ backgroundColor: '#cccccc', height: 1, flex: 1 }} />
          <div style={styles.news_content}>
            {data.map((item) => {
              return (
                <div style={styles.news_content_item}>
                  <a href="#" style={styles.news_content_title}>{item}</a>
                  <a href="#" style={styles.news_content_time}>2018-12-01</a>
                </div>
              )
            })}

          </div>
        </div>

      </div>
    )
  }
}

const styles = {
  guide_main: {
    backgroundColor: 'white',
    flex: 1,
    border: '1px solid #cccccc'
  },

  title_layout: {
    backgroundColor: '#eeeeee', paddingLeft: 20, paddingTop: 10, paddingBottom: 10
  },
  app_main: {
    backgroundColor: 'white',
    flex: 1,
    border: '1px solid #cccccc',
    marginTop: 10
  },
  app_content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  news_content: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  news_content_title: {
    color: '#666666',
    flex: 1
  },
  news_content_time: {
    color: '#666666',
    fontSize: 12
  },
  news_content_item: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #eeeeee',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export default Home