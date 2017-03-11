'use strict';

import React from 'react';
import LoaderWrapper from '../loader/ComponentWrapper';
import UserInfoHeader from '../user-info-header/UserInfoHeader';
import './styles.css';

const WrappedImage = LoaderWrapper(({src}) => <img src={src}/>);
const MainUserInfo = ({user}) => (
  <section className="mainUserInfo">
    <figure className="userImgInfo">
      <WrappedImage src={user.imgSrc}/>
    </figure>
    <span className="userNameInfo">{user.name}</span>
    <span className="userCityInfo">{user.city}</span>
  </section>
);
MainUserInfo.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    tel: React.PropTypes.string.isRequired,
    city: React.PropTypes.string.isRequired,
    imgSrc: React.PropTypes.string.isRequired,
    dateOfBirth: React.PropTypes.string.isRequired,
    gender: React.PropTypes.string.isRequired,
    language: React.PropTypes.string.isRequired,
  }).isRequired,
};

const DescriptionField = ({field}) => (
  <section className="userInfoField">
    <span className="infoTitle">{field.title}</span>
    <span className="infoContent">{field.content}</span>
  </section>
);
DescriptionField.propTypes = {
  field: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
  }).isRequired,
};

const UserDescription = ({user}) => (
  <section className="userInfoDescription">
    <DescriptionField field={{title: 'Name:', content: user.name}}/>
    <DescriptionField field={{title: 'Nickname:', content: user.username}}/>
    <DescriptionField field={{title: 'Tel:', content: user.tel}}/>
    <DescriptionField field={{title: 'Date Of Birth:', content: user.dateOfBirth}}/>
    <DescriptionField field={{title: 'Gender:', content: user.gender}}/>
    <DescriptionField field={{title: 'Language:', content: user.language}}/>
  </section>
);
UserDescription.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    tel: React.PropTypes.string.isRequired,
    city: React.PropTypes.string.isRequired,
    imgSrc: React.PropTypes.string.isRequired,
    dateOfBirth: React.PropTypes.string.isRequired,
    gender: React.PropTypes.string.isRequired,
    language: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default class UserInfo extends React.PureComponent {
  render() {
    return (
      <section className="userInfoContainer">
        <UserInfoHeader name="Matt Thompson"/>
        <section className="userInfoSubContainer">
          {/*<MainUserInfo user={user}/>*/}
          {/*<UserDescription user={user}/>*/}
        </section>
      </section>
    );
  }
}