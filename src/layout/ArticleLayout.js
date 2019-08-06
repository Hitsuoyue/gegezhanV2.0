import React, { Component } from 'react';
import marked from 'marked';
import './home.less';
export default class HomeLayout extends Component{

  state={
    markdown: ''
  }

  componentWillMount() {
    // fetch(md1)
    //   .then(res => {
    //     console.log('res: ', res)
    //     return res.text()
    //   })
    //   .then(text => {
    //     console.log('text: ', text)
    //     this.setState({markdown: text})
    //   });
  }

  render(){
    // console.log('md1: ', this.state.markdown)
    const html = marked(this.state.markdown || '')

    return <div className="home-container">
      <section className="header-menu">
        <div className="logo-container">
          {/*<span id="logo"></span>*/}
          格格栈
        </div>
        <div className="menu">
          <span className="item">首页</span>
          <span className="item">文章</span>
          <span className="item">作品</span>
          <span className="item">随笔</span>
          <span className="item">关于我</span>
        </div>
      </section>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  }
}