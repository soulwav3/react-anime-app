import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <h1 className="main-header__heading">React anime app</h1>
        <h2 className="main-header__subheading">powered by <a href="http://docs.kitsu.apiary.io">kitsu API</a></h2>
      </header>
    )
  }
}