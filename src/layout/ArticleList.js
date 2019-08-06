import React, { Component } from 'react';
import './article.less';

import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';
import img10 from '../images/a.jpg';
import img11 from '../images/b.jpg';
import img12 from '../images/c.jpg';
import img13 from '../images/d.jpg';
import img14 from '../images/e.jpg';
import img15 from '../images/f.jpg';
import img16 from '../images/g.jpg';
import img17 from '../images/h.jpg';
import img18 from '../images/i.jpg';
import img19 from '../images/k.jpg';
import img20 from '../images/l.jpg';
import img21 from '../images/m.jpg';
import img22 from '../images/n.jpg';

import articles from './markdowns';

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22,
]

export default class ArticleList extends Component{

  renderArticles = (list) => {
    let elems = list.map((item, index) => {
      return <div
        key={index}
        className={`article-list-item article-list-item-${index%3+1} color-${index%5+1}`}
        onClick={e => window.location.hash = `#/article/${index}`}
      >
        <div className="article-content">
          <div className="article-list-title">{item.title}</div>
          <div className="article-list-date">{item.date}</div>
        </div>
        <div className="article-img">
          <img src={imgs[index%22]} alt=""/>
        </div>
      </div>
    })
    return elems;
  }

  render(){
    return <div className="article-list">
      {
        this.renderArticles(articles)
      }
    </div>
  }
}