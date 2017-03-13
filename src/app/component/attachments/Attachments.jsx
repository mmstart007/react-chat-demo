'use strict';

import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import './styles.css';

const Photo = () => <section>Photo</section>;
const Video = () => <section>Video</section>;
const Audio = () => <section>Audio</section>;
const Documents = () => <section>Documents</section>;
const routes =
  <Route path='/'>
    <Route path='attachments'>
      <Route path='photo' component={Photo}/>
      <Route path='video' component={Video}/>
      <Route path='audio' component={Audio}/>
      <Route path='documents' component={Documents}/>
    </Route>
  </Route>;

export default class Attachments extends React.PureComponent {
  onClick(e) {
    e.preventDefault();
    const value = e.target.getAttribute('href').toLowerCase();
    browserHistory.push(value);
  }

  render() {
    return (
      <section className="attachmentModalContainer">
        <header className="attachmentsModalHeader">
          <a href="/attachments/photo" className="attachmentItem" onClick={(e) => this.onClick(e)}>Photo</a>
          <a href="/attachments/video" className="attachmentItem" onClick={(e) => this.onClick(e)}>Video</a>
          <a href="/attachments/audio" className="attachmentItem" onClick={(e) => this.onClick(e)}>Audio</a>
          <a href="/attachments/documents" className="attachmentItem"
             onClick={(e) => this.onClick(e)}>Documents</a>
        </header>
        <section className="attachmentsModalContent">
          <Router history={browserHistory} routes={routes}/>
        </section>
      </section>
    );
  }
}