import React, { Component } from 'react';
import './header.less';
export default class Header extends Component{
  render(){
    return <div>
        <div className="header-wrapper">
          <section className="header-menu">
            <div className="logo-container">
              格格栈
            </div>
            <div className="menu">
              <span className="item">首页</span>
              {/*<span className="item">文章</span>*/}
              <span className="item">作品</span>
              <span className="item">随笔</span>
              <span className="item">关于我</span>
            </div>
          </section>
        </div>
      <div className="seat"></div>
      </div>
  }
}