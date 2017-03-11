'use strict';

import React from 'react';
import './styles.css';
import './userPopup.css';

export default class UserInfoHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {notificationOn: true, showUserInfoPopup: false};
  }

  onChoose() {
    this.setState({showUserInfoPopup: !this.state.showUserInfoPopup});
  }

  render() {
    const styles = ['notificationButton', this.state.notificationOn ? 'notificationButtonOn' : 'notificationButtonOff'];
    return (
      <header className="userInfoHeader">
        <span
          className={styles.reduce((i, j) => `${i} ${j}`)}
          onClick={() => {
            this.setState({notificationOn: !this.state.notificationOn});
          }}/>
        <section
          className="userInfoActionsContainer"
          onMouseEnter={() => {
            this.setState({showUserInfoPopup: true});
          }}
          onMouseLeave={() => {
            this.setState({showUserInfoPopup: false});
          }}>
          <span className="userInfoActions">{this.props.name}</span>
          <section className="userInfoPopupContainer" style={{display: this.state.showUserInfoPopup ? 'flex' : 'none'}}>
            <button className="blockButton" onClick={() => this.onChoose()}>Block</button>
          </section>
        </section>
        <span className="closeInfo">&times;</span>
      </header>
    );
  }
}

UserInfoHeader.propTypes = {
  name: React.PropTypes.string.isRequired,
};