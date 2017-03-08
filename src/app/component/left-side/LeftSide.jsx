'use strict';

import React from 'react';
import items from './data';
import './styles.css';

const LeftSideItem = ({imgSrc, title}) =>
  <li className="messenger">
    <figure>
      <img src={imgSrc} alt={title}/>
    </figure>
  </li>;

LeftSideItem.propTypes = {
  imgSrc: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};


export default class LeftSide extends React.PureComponent {
  render() {
    return (
      <nav className="navContainer">
        <header className="navHeader">
          <span className="menuIcon"/>
        </header>
        <section>
          <ul className="menuItems">
            {items.map(item => <LeftSideItem key={item.title} imgSrc={item.imgSrc} title={item.title}/>)}
          </ul>
        </section>
      </nav>
    );
  }
}