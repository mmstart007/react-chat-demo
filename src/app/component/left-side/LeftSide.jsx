'use strict';

import React from 'react';
import items from './data';
import './styles.css';

const LeftSideItem = ({title, position}) =>
  <li className="messenger">
    <figure>
      <span
        style={{
          backgroundPosition: `${position.x}px ${position.y}px`,
          width: '44px',
          height: '42px',
        }}
        alt={title}/>
    </figure>
  </li>;

LeftSideItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  position: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
  })
};


export default class LeftSide extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {showList: true};
  }

  render() {
    return (
      <nav className="navContainer">
        <header
          className="navHeader"
          onClick={() => {
            this.state.showList ? this.props.closeConversationList() : this.props.showConversationList();
            this.setState({showList: !this.state.showList});
          }}
        >
          <span className="menuIcon"/>
        </header>
        <section>
          <ul className="menuItems">
            {items.map(item => <LeftSideItem key={item.title} title={item.title}
                                             position={item.position}/>)}
          </ul>
        </section>
      </nav>
    );
  }
}