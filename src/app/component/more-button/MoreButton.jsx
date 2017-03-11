'use strict';

import React from 'react';
import './modalStyle.css';

export default class MoreButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  onChoose() {
    this.setState({showModal: !this.state.showModal});
  }

  render() {
    return (
      <section
        onMouseEnter={() => {
          this.setState({showModal: true});
        }}
        onMouseLeave={() => {
          this.setState({showModal: false});
        }}>
        <button className="moreButton"/>
        <section className="moreModalContainer" style={{display: this.state.showModal ? 'flex' : 'none'}}>
          <button className="deleteButton" onClick={() => this.onChoose()}>Delete</button>
          <button className="pinButton" onClick={() => this.onChoose()}>Pin</button>
        </section>
      </section>
    );
  }
}