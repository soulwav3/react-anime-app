import React from 'react';

export default class ReloadButton extends React.Component {

  componentDidMount() {
    let button = document.querySelector('.anime__reload-btn');

    function enableAfter5S() {
      button.disabled = true;
      button.innerHTML = 'Wait';
      setTimeout(() => {
        button.innerHTML = 'Reload';
        button.disabled = false;
      }, 5000);
    }

    enableAfter5S();

    button.addEventListener('click', enableAfter5S);
  }

  render() {
    let reload = this.props.reload;
    return <button className="anime__reload-btn" onClick={reload}>Reload</button>
  }
}