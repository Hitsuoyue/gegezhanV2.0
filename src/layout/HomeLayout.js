import React, { Component } from 'react';
import Header from './Header'
import marked from 'marked';
import './home.less';
import ArticleList from './ArticleList'
import ArticleItem from './ArticleItem'
import heart1 from '../images/heart-pink-gray.png';
import heart2 from '../images/heart-pink.png';
// import Md1 from '../list/2.md.js'


export default class HomeLayout extends Component{

  constructor(props) {
    super(props);
    this.state = ({
      CurrentComponent: this.onHashChange()
    })
  }

  componentWillMount(){
    let self = this
    window.addEventListener('hashchange', () => self.setState({CurrentComponent: self.onHashChange()}));
    // console.log(Md1)
  }

  onHashChange = () => {
    const { hash = '' } = window.location;
    let currentPath = hash.split('/')[1]
    let CurrentComponent = ArticleList;
    console.log('currentPath, ', currentPath)
    if(currentPath){
      switch (currentPath) {
        case '':
          CurrentComponent = ArticleList;
          break;
        case 'article':
          CurrentComponent = ArticleItem;
          break;
        default:
          CurrentComponent = ArticleList;
          break;
      }
    }
    return CurrentComponent
  }

  render(){
    const { CurrentComponent } = this.state;
    // console.log('CurrentComponent', CurrentComponent)
    return <div>
      <Header/>
      <div className="content-wrapper">
        <CurrentComponent/>
        <img className="heart1" src={heart1} alt=""/>
        <img className="heart2" src={heart2} alt=""/>
      </div>
      {/*<Md1/>*/}
    </div>
  }
}