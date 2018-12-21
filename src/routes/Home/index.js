import React from 'react'
import { Carousel } from 'antd';
import './style.css';
import CustomBreadcrumb from '../../components/CustomBreadcrumb/index';
import TypingCard from '../../components/TypingCard';
import { Row, Col } from 'antd';

class Home extends React.Component {
  render() {
    let list = ['马云', '马化腾', '李彦宏', '张怡宁'];
    return (
      <div className='home'>
        <CustomBreadcrumb arr={['后台首页']} />
        {/* <TypingCard source={'这是后台首页'} title='新手指引' height={40} /> */}
        <div style={{ backgroundColor: 'white', height: 100, flex: 1, border: '1px solid #cccccc' }}>
          <div style={{ backgroundColor: '#eeeeee', paddingLeft: 20, paddingTop: 10, paddingBottom: 10 }}>
            <text style={{ fontSize: 16, fontWeight: 'bold' }}>新手指引</text>
          </div>
          <div style={{ backgroundColor: '#cccccc', height: 1, flex: 1 }} />
          <Row type="flex" justify="center">
            {list.map((lement) => {
              return (
                <img
                src={'https://www.baidu.com/img/baidu_jgylogo3.gif'}
              />
              );
            })}
          </Row>
        </div>
      </div>
    )
  }
}

const styles = {
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'calc(100vh - 64px)'
  }
}

export default Home