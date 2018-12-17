import React from 'react'
import { Carousel } from 'antd';
import './style.css';
import CustomBreadcrumb from '../../components/CustomBreadcrumb/index';
import TypingCard from '../../components/TypingCard';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <CustomBreadcrumb arr={['后台首页']} />
        <TypingCard source={'这是后台首页'} title='新手指引' height={40} />
        <img
          src={'https://www.baidu.com/img/baidu_jgylogo3.gif'}
        />
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