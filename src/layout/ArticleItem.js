import React, { Component } from 'react';
import marked from 'marked';
import './articleItem.less';
import articles from './markdowns';

export default class ArticleItem extends Component{

  state={
    markdown: ''
  }

  componentWillMount() {
    const { hash = '' } = window.location;
    let currentArticle = hash.split('/')[2]
    if(currentArticle !== undefined && currentArticle !== '') {
      this.currentArticle = currentArticle;
      let src = articles[currentArticle].source
      // if(window.location.hostname == 'hitsuoyue.github.io'){
      //   src = `https://hitsuoyue.github.io/react-blog-test${articles[currentArticle].source}`
      // }
      console.log(src)

      fetch(src)
        .then(res => {
          return res.text()
        })
        .then(text => {
          this.setState({markdown: text})
        });
    }

  }

  render(){
    const html = marked(this.state.markdown || '')
    return <div className="article-item">
      <div className="article-title">
        {
          this.currentArticle && articles[this.currentArticle] && articles[this.currentArticle].title || ''
        }
      </div>
      {/*<InnerText/>*/}
      <div className="article-content" dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  }
}