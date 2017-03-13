'use strict';

import React from 'react';
import './styles.css';

export default class ConversationSearch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.input = {value: ''};
  }

  render() {
    return (
      <header className="searchConversationContainer">
        <input
          className="searchConversation"
          placeholder="Search"
          ref={(input) => this.input = input}
          value={this.input.value || ''}
          autoFocus={true}
          onChange={() => {
            this.props.filterConversations(this.input.value);
          }}
        />
      </header>
    );
  }
}